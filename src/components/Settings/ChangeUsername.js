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
        .put(
          "http://34.236.108.123:3000/" +
            loggedusername +
            "/settings/account/change-username",
          { name: username },
          { headers: { Authorization: "Bearer " + token } }
        )
        .then((res) => res.data);
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
    console.log(response);
    return response;
  }

  function changeUsername() {
    ChangeUsername();
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
