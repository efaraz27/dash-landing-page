import React from "react";
import AddButton from "../assets/add-button.svg";
import Plus from "../assets/plus.svg";
import "../styles/AddComponent.css";

function AddComponent() {
  return (
    <div className="add-component-card">
      <img src={AddButton} alt="" className="add-btn" />
      <div className="add-component-text">No components created yet</div>
      <div className="add-component-desc">
        Simply create your first component. Just click on the button
      </div>
      <div className="add-btn-big">
        <img src={Plus} alt="" />
        Add component
      </div>
    </div>
  );
}

export default AddComponent;
