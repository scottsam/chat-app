import React from "react";

import onlineIcon from "./Icons/onlineIcon.png";
import "../Styles/TextContainer.css";

const TextContainer = ({ users,room }) => (
  <div className="textContainer">
    <div>
      <h4>
        A Chat Application{" "}
        <span role="img" aria-label="emoji">
          💬
        </span>
      </h4>
      <h4>
        Created with React, Express, Node and Socket.IO{" "}
        <span role="img" aria-label="emoji">
          ❤️
        </span>
      </h4>
      
    </div>
    {users ? (
      <div>
        <h3>People currently chatting in {room}:</h3>
        <div className="activeContainer">
          
          <h4>
            {users.map(({ name }) => (
            
              <div key={name} className="activeItem">
                
                {name}
                <img alt="Online Icon" src={onlineIcon} />
              </div>
            ))}
          </h4>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
