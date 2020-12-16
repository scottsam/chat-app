import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Join.css";

const Join = ({ history }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const clickHandler = (e) => {
    if (!name || !room) {
      e.preventDefault();
    } else {
      history.push(`/chat?name=${name}&room=${room}`);
    }
  };

  return (
    <div className="join-wrap">
      <div>
        <h1 className="heading">Join By Typing a room and a username</h1>
        <div>
          <input
            className="joinInput"
            type="text "
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="text "
            className="joinInput form-control"
            placeholder="Room"
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>

        <button className="btn" onClick={clickHandler}>
          Join Room
        </button>
      </div>
    </div>
  );
};

export default Join;
