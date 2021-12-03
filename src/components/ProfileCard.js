import React from "react";
import "../styles/ProfileCard.css";

function ProfileCard(props) {
  return (
    <div className="profile-card">
      <div className="profile-details">
        <img src={props.pic} alt="" />
        <div className="profile-name">
          {props.name} <span className="position">Sales manager - France</span>
        </div>
        <div className="performance">
          <img src={props.trend} alt="" />
          <div className={props.up ? "value-up" : "value-down"}>
            {props.value}
          </div>
        </div>
      </div>
      <div className="task">
        <div className="status">3 from 6 tasks completed</div>
        <div className="progress-bar">
          <div className="progress-fill" style={{width: `${props.progress}`}}></div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
