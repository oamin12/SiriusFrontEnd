import React, { useState } from "react";
import "../Layout.css";
import "./ChangeUsername.css";
import SideBar from "../SideBar/SideBar";
import { useNavigate } from "react-router-dom";
import WhoToFollow from "../WhoToFollow/WhoToFollow";
import SearchBox from "../Search/SearchBox";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
function ChangeUsername() {
  let navigate = useNavigate();
  var token = sessionStorage.getItem("tokenValue");
  var loggedusername = localStorage.getItem("UserName");
  const [successMsg, setSucessMsg] = useState("");
  const [errorName, setErrorMsg] = useState("");
  const [username, setUsername] = useState("");
  console.log(" Current Username:", username);
  const handleChange = (e) => {
    const value = e.target.value;
    setUsername(value);
  };

  async function ChangeUsername() {
    let response = "";
    try {
      response = await axios
        .patch(
          "http://34.236.108.123:3000/settings/Account-info/Username/",
          { username: username },
          { headers: { Authorization: "Bearer " + token } }
        )
        .then((res) => res.data);
      if (response.success == true) {
        setSucessMsg("Username changed succesfully!");
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

  function changeUsername() {
    let current = document.querySelector(".username-user").value;
    if (current != 0) {
      ChangeUsername();
    } else {
      setErrorMsg("Please enter a username!");
    }
  }

  return (
    <div className="layout">
      <SideBar />
      <div className="feeder">
        <ArrowBackIcon
          onClick={() => navigate("/settings/accountinformation")}
          className="arrow-back"
        />
        <h3 className="header-user">Change username</h3>
        <input
          className="username-user"
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
          value={username}
        />
        <hr className="line-password"></hr>
        <button onClick={changeUsername} className="save-user">
          Save
        </button>
        {errorName != "" ? (
          <div
            style={{
              position: "fixed",
              marginTop: "20px",
              marginLeft: "-630px",
              textAlign: "center",
              color: "red",
            }}
            className="message-message"
          >
            {errorName}
          </div>
        ) : (
          ""
        )}
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

export default ChangeUsername;
