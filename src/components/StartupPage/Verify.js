import React, { useState } from "react";
import greyback from "./Images/grey.png";
import "./Verify.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Verify = () => {
  let navigate = useNavigate();

  const Data = {
    code: "",
  };

  async function Verify() {
    let response = '';
    try {
      response = await axios.patch('http://34.236.108.123:3000/signup-confirm/'+dataValue.code).then((res) => res.data);
      if(response.status==="Success")
      {
        navigate("/signin");
      }
      return (response.data);
    } catch (error) {
      if (error.response) {
        console.log(error.response);
        return (error.response);
      }
    }
    console.log(response);
    return (response);
  }
  const [dataValue, setData] = useState(Data);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...dataValue, [name]: value });
  };
  const  handleVerify = (e) => {
    
    Verify();

    e.preventDefault();
    // Login(SignInState);
  };
  console.log(dataValue.code);
  return (
    <div className="Verify">
      <img className="backv" src={greyback} />
      <div className="containerv">
        <ArrowBackIcon className="backav" onClick={() => navigate("/signup")} />
        <h1 className="h1v">We sent you a code</h1>
        <p className="infov">Enter it below to verify your email.</p>
        <input className="boxv" name="code" value={dataValue.code} onChange={handleChange} placeholder="Verification code" />
        <button onClick={handleVerify} class="nextbtnv">
          Next
        </button>
      </div>
    </div>
  );
};

export default Verify;
