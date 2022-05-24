import React, { useState } from "react";
import "./ChangePassword.css";
import SideBar from "../SideBar/SideBar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import WhoToFollow from "../WhoToFollow/WhoToFollow";
import SearchBox from "../Search/SearchBox";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function ChangePassword() {
  var token = sessionStorage.getItem("tokenValue");
  const [successMsg, setSucessMsg] = useState("");
  const [errorName, setErrorMsg] = useState("");
  const [password, setPassword] = useState("");
  const [newpassword, setNewpassword] = useState("");
  console.log(password);
  console.log(newpassword);
  async function Changepassword() {
    let response = "";
    try {
      response = await axios
        .patch(
          "http://34.236.108.123:3000/settings/Account-info/Password",
          { password: password, newPassword: newpassword },
          { headers: { Authorization: "Bearer " + token } }
        )
        .then((res) => res.data);
      if (response.status === "Success") {
        setSucessMsg("Password changed succesfully!");
      }
      return response;
    } catch (error) {
      if (error.response) {
        setSucessMsg("You entered the wrong password!");
        return error.response;
      }
    }
    console.log(response);
    return response;
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setNewpassword(value);
  };
  const handleChangeP = (e) => {
    const value = e.target.value;
    setPassword(value);
  };
  function handleClick() {
    let current = document.querySelector(".current-password").value;
    let password = document.querySelector(".new-password").value;
    let cnfrmPassword = document.querySelector(".confirm-password").value;
    let message = document.getElementById("message");
    if (current.length != 0 && password.length != 0) {
      if (password == cnfrmPassword) {
        Changepassword();
      } else {
        message.textContent = "Passwords don't match";
        message.style.color = "#ff4d4d";
      }
    } else {
      message.textContent = "Password fields cannot be empty!";
      message.style.color = "#ff4d4d";
    }
  }
  let navigate = useNavigate();
  return (
    <div className="layout">
      <SideBar />
      <div className="feeder">
        <ArrowBackIcon
          onClick={() => navigate("/settings")}
          className="arrow-back"
        />
        <h3 className="header-password">Change your password</h3>
        <input
          className="current-password"
          type="password"
          placeholder="Current password"
          onChange={handleChangeP}
          value={password}
        />
        <a
          onClick={() => navigate("/forgetpassword")}
          className="forgot-password"
        >
          Forgot Password?
        </a>
        <hr className="line-password"></hr>
        <input
          className="new-password"
          type="password"
          placeholder="New password"
          onChange={handleChange}
          value={newpassword}
        />
        <input
          className="confirm-password"
          type="password"
          placeholder="Confirm password"
        />
        <hr className="line2-password"></hr>
        <button onClick={handleClick} className="save-password">
          Save
        </button>
        <div id="message"></div>
        {successMsg != "" ? (
          <div
            style={{
              marginLeft: "20px",
              color: "#00acee",
            }}
          >
            {successMsg}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="widgets">
        <div className="search">
          <SearchBox
            size="40"
            styling={{
              width: "30%",
              marginTop: "-15.5%",
              marginLeft: "70%",
              height: "60%",
            }}
          />
        </div>
        <div className="whatsHappening">what's happening</div>
        <div className="whoToFollow">
          {" "}
          <WhoToFollow />{" "}
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
