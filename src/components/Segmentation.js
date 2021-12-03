import React from "react";
import ExpandableButton from "./ExpandableButton";
import "../styles/Segmentation.css";
import SegmentationBar from "./SegmentationBar";

function Segmentation() {
  return (
    <div className="segmentation-card">
      <div className="main-title">Segmentation</div>
      <div className="sub-title">All users</div>
      <div className="segmentation-content">
        <div className="segmentation-list">
          <div className="not-specified">
            <div className="bullet"></div>
            <div className="segment-text">Not specified</div>
          </div>
          <div className="male">
            <div className="bullet"></div>
            <div className="segment-text">Male</div>
          </div>
          <div className="female">
            <div className="bullet"></div>
            <div className="segment-text">Female</div>
          </div>
          <div className="others">
            <div className="bullet"></div>
            <div className="segment-text">Other</div>
          </div>
        </div>
        <SegmentationBar />
      </div>
      <div className="main-divider"></div>
      <ExpandableButton text={"View all"} />
    </div>
  );
}

export default Segmentation;
