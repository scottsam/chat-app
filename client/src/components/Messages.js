import React from "react";

import ScrollToBottom from "react-scroll-to-bottom";

import Message from "./Message";

const Messages = ({ messages, name }) => (
  <ScrollToBottom
    className="messages"
    style={{ padding: "5% 0", overflow: "auto", flex: "auto" }}
  >
    {messages.map((message, i) => (
      <div key={i}>
        <Message message={message} name={name} />
      </div>
    ))}
  </ScrollToBottom>
);

export default Messages;
