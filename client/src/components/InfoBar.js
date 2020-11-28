import React from "react";

import onlineIcon from "../components/Icons/onlineIcon.png";
import closeIcon from "../components/Icons/closeIcon.png";

const InfoBar = ({ room }) => (
  <div
    className='infoBar'
  >
    <div className="leftInnerContainer " >
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h5>{room}</h5>
    </div>
    <div className=" rightInnerContainer ">
      <a href="/">
        <img src={closeIcon} alt="close icon" className="onlineIcon" />
      </a>
    </div>
  </div>
);

export default InfoBar;
