import React from "react";
import { useNavigate } from "react-router-dom";
import greyback from "../StartupPage/Images/grey.png";
import WhoToFollow from "../WhoToFollow/WhoToFollow";
import SearchBox from "../Search/SearchBox";
import axios from "axios";
import "./Popup.css";
const Popup = () => {
  var token = sessionStorage.getItem("tokenValue");
  async function Deactivate() {
    let response = "";
    try {
      response = await axios
        .patch(
          "http://34.236.108.123:3000/settings/Deactivate-account",
          {},
          { headers: { Authorization: "Bearer " + token } }
        )
        .then((res) => res.data);
      if (response.success == true) {
        navigate("/");
      }
      return response;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
    console.log(response);
    return response;
  }

  function handleClick() {
    Deactivate();
  }
  let navigate = useNavigate();
  return (
    <div>
      <img className="back-popup" src={greyback} />
      <div className="container-popup">
        <h1 className="header-popup">
          Are you sure you want to deactivate your account?
        </h1>
        <button onClick={handleClick} className="deactivate-popup">
          Deactivate
        </button>
        <button onClick={() => navigate("/settings")} className="cancel-popup">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Popup;
