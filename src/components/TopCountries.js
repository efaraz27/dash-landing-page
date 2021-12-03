import React from "react";
import "../styles/TopCountries.css";
import belgiumFlag from "../assets/belgium-flag.svg";
import franceFlag from "../assets/france-flag.svg";
import usaFlag from "../assets/usa-flag.svg";
import germanyFlag from "../assets/germany-flag.svg";
import Country from "./Country";
import ExpandableButton from "./ExpandableButton";

function TopCountries() {
  return (
    <div className="top-countries-card">
      <div className="main-title">Top countries</div>
      <div className="sub-title">Favourites</div>
      <div className="countries">
        <Country flag={belgiumFlag} name={"Belgium"} value={"7.5K"} />
        <div className="country-divider"></div>
        <Country flag={franceFlag} name={"France"} value={"5.3K"} />
        <div className="country-divider"></div>
        <Country flag={usaFlag} name={"USA"} value={"4.9K"} />
        <div className="country-divider"></div>
        <Country flag={germanyFlag} name={"Germany"} value={"4.8K"} />
      </div>
      <div className="main-divider"></div>
      <ExpandableButton text={"View all"} />
    </div>
  );
}

export default TopCountries;
