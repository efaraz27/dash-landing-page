import React from "react";
import Meter from "./Meter";
import ExpandableButton from "./ExpandableButton";
import "../styles/Satisfaction.css";

function Satisfaction() {
  return (
    <div className="satisfaction-card">
      <div className="main-title">Satisfaction rate</div>
      <div className="sub-title">From all projects</div>
      <div className="satisfaction-contents"><Meter /></div>
      <div className="main-divider"></div>
      <ExpandableButton text={"View all"} />
    </div>
  );
}

export default Satisfaction;
