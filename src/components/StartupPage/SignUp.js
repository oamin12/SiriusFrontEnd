import React from "react";
import "./SignUp.css";
import greyback from "./Images/grey.png";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
let type = 0;
const SignUp = () => {
  let navigate = useNavigate();
  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="SignUp">
      <img className="backf3" src={greyback} />
      <div className="containerf3">
        <CloseIcon className="closef3" onClick={() => navigate("/")} />
        <h1 className="h1f3">Create your account</h1>
        <input
          className="namef3"
          type="text"
          placeholder="Name"
          maxlength="50"
        />
        <input
          className="phonef3"
          id="change"
          type="email"
          placeholder="Email"
        />
        <h4 className="datef3">Date of birth</h4>
        <p className="infof3">
          This will not be shown publicly. Confirm your own age, even if this
          <br />
          account is for a business, a pet, or something else.
        </p>
        <div className="Dropdown">
          <select className="month"></select>
          <select className="day"></select>
          <select className="year"></select>
        </div>
        <button className="nextbtnf3">Next</button>
      </div>
    </div>
  );
};

export default SignUp;
