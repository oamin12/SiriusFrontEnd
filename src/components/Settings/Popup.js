import React from "react";
import { useNavigate } from "react-router-dom";
import greyback from "../StartupPage/Images/grey.png";
import "./Popup.css";
const Popup = () => {
  let navigate = useNavigate();
  return (
    <div>
      <img className="back-popup" src={greyback} />
      <div className="container-popup">
        <h1 className="header-popup">
          Are you sure you want to deactivate your account?
        </h1>
        <button className="deactivate-popup">Deactivate</button>
        <button onClick={() => navigate("/settings")} className="cancel-popup">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Popup;
