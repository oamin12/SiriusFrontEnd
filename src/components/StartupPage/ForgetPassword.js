import React, { useState } from "react";
import greyback from "./Images/grey.png";
import "./ForgetPassword.css";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import axios from "axios";
/**
 * @description A component used whenever the user forgets the password by entering email or username
 * @returns A div that contains this component
 */
const ForgetPassword = () => {
  var token = sessionStorage.getItem("tokenValue");
  const [successMsg, setSucessMsg] = useState("");
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const handleClick = () => {
    Forget();
  };
  async function Forget() {
    let response = "";
    try {
      response = await axios
        .post(
          "http://34.236.108.123:3000/forgot-password",
          { email: email },
          { headers: { Authorization: "Bearer " + token } }
        )
        .then((res) => res.data);
      if (response.status == "success") {
        navigate("/verifypassword");
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
          onChange={handleChange}
          value={email}
        />
        <button onClick={handleClick} class="nextbtnf5">
          Search
        </button>
        {successMsg != "" ? (
          <div
            style={{
              position: "fixed",
              marginTop: "20px",
              marginLeft: "-630px",
              textAlign: "center",
              color: "#00acee",
            }}
          >
            {successMsg}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ForgetPassword;
