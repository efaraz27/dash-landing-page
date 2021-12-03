import React from "react";
import '../styles/Country.css'

function Country(props) {
  return (
    <div className="country">
      <img src={props.flag} alt="" />
      <div className="country-name">{props.name}</div>
      <div className="country-value">{props.value}</div>
    </div>
  );
}

export default Country;
