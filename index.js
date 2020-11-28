const express = require("express");
const path=require('path')
const http = require("http");
const sockeio = require("socket.io");
const cors = require("cors");
const router = require("./route");
const { addUser, getUser, getUsersInRoom, removeUser } = require("./users");

const port = process.env.PORT || 4444;

const app = express();
const server = http.createServer(app);
const io = sockeio(server);

app.use("/", router);
if (process.env.NODE_ENV === "production"){
      app.use(express.static(path.join(__dirname, "client", "build")))
      app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname,  "build", "index.html"));
      });
    }

//when the client is connected
io.on("connection", (socket) => {

  //user joins room
  socket.on("join", ({ name, room }, cb) => {
    const { error, user } = addUser({ id: socket.id, name, room });
    if (error) return cb(error);
// emitting message to welcome the new user
    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome to ${user.room} room`,
    });

    //broadcast message to everyone except the new user
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name}, has joined` });

    socket.join(user.room);

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });
    cb();
  });
  //sending a message to another user
  socket.on("sendMessage", (message, cb) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", { user: user.name, text: message });
    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    cb();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit("message", {
        user: "admin",
        text: `${user.name}  has left!!`,
      });
    }
  });
});



server.listen(port, () => {
  console.log(`Listening on ${port}....`);
});
