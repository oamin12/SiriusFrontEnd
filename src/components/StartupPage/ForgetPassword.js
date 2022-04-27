import React from "react";
import greyback from "./Images/grey.png";
import "./ForgetPassword.css";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
/**
 * @description A component used whenever the user forgets the password by entering email or username
 * @returns A div that contains this component
 */  
const ForgetPassword = () => {
  let navigate = useNavigate();
  return (
    <div className="ForgetPassword">
      <img className="backf5" src={greyback} />
      <div className="containerf5">
        <CloseIcon className="closef5" onClick={() => navigate("/")} />
        <h1 className="h1f5">Find your Sirius account</h1>
        <input
          className="boxf5"
          placeholder="Enter your email address, or username"
        />
        <button class="nextbtnf5">Search</button>
      </div>
    </div>
  );
};

export default ForgetPassword;
