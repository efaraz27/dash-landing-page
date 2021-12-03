import React from "react";
import "../styles/Meter.css";
import meter from "../assets/meter.svg";

function Meter() {
  return (
    <div className="meter">
      <img src={meter} alt="" width={'222px'} />
    </div>
  );
}

export default Meter;
