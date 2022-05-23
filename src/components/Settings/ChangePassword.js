import React, { useState } from "react";
import "./ChangePassword.css";
import SideBar from "../SideBar/SideBar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import WhoToFollow from "../WhoToFollow/WhoToFollow";
import SearchBox from "../Search/SearchBox";
import { useNavigate } from "react-router-dom";
function ChangePassword() {
  const Data = {
    currentpassword: "",
    newpassword: "",
    confirmpassword: "",
  };
  const [dataValues, setData] = useState(Data);
  console.log(
    " Current Password:",
    dataValues.currentpassword,
    "\n",
    "New Password:",
    dataValues.newpassword,
    "\n",
    "Confirm Password:",
    dataValues.confirmpassword
  );
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...dataValues, [name]: value });
  };
  function handleClick() {
    let current = document.querySelector(".current-password").value;
    let password = document.querySelector(".new-password").value;
    let cnfrmPassword = document.querySelector(".confirm-password").value;
    let message = document.getElementById("message");
    if (current.length != 0 && password.length != 0) {
      if (password == cnfrmPassword) {
        message.textContent = "Passwords match";
        message.style.color = "#1dcd59";
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
          onChange={handleChange}
          value={dataValues.currentpassword}
          name="currentpassword"
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
          value={dataValues.newpassword}
          name="newpassword"
        />
        <input
          className="confirm-password"
          type="password"
          placeholder="Confirm password"
          onChange={handleChange}
          value={dataValues.confirmpassword}
          name="confirmpassword"
        />
        <hr className="line2-password"></hr>
        <button onClick={handleClick} className="save-password">
          Save
        </button>
        <div id="message"></div>
        {/* <pre>{JSON.stringify(dataValues, undefined, 2)}</pre>; */}
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
