import React from "react";
import arrow from "../assets/arrow.svg";
import '../styles/ExpandableButton.css'

function ExpandableButton(props) {
  return (
    <div className="expandable-button">
      <div className="btn-text">{props.text}</div>
      <div className="arrow">
        <img src={arrow} alt="" />
      </div>
    </div>
  );
}

export default ExpandableButton;
