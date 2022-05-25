import React, { useState } from "react";
import greyback from "./Images/grey.png";
import "./Verify.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Verify = () => {
  let navigate = useNavigate();
  const handleVerify = (e) => {
    navigate("/signin");
  };
  return (
    <div className="Verify">
      <img className="backv" src={greyback} />
      <div className="containerv">
        <ArrowBackIcon className="backav" onClick={() => navigate("/signup")} />
        <h1 className="h1v">We sent you a code</h1>
        <p className="infov">Please check your email to verify your account.</p>
        <button onClick={handleVerify} class="nextbtnv">
          Next
        </button>
      </div>
    </div>
  );
};

export default Verify;
