import React, { useState } from "react";
import "../Layout.css";
import SideBar from "../SideBar/SideBar";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import WhoToFollow from "../WhoToFollow/WhoToFollow";
import SearchBox from "../Search/SearchBox";
import axios from "axios";
import "./NotificationsSettings.css";
function ProtectedTweets() {
  var token = sessionStorage.getItem("tokenValue");
  const [successMsg, setSucessMsg] = useState("");
  async function Mute() {
    let response = "";
    try {
      response = await axios
        .patch(
          "http://34.236.108.123:3000/settings/Notifications",
          {},
          { headers: { Authorization: "Bearer " + token } }
        )
        .then((res) => res.data);
      if (response.success == true) {
        setSucessMsg("Notifications Muted succesfully!");
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
    Mute();
  }
  let navigate = useNavigate();
  return (
    <div className="layout">
      <SideBar />
      <div className="feeder">
        <ArrowBackIcon
          onClick={() => navigate("/settings/")}
          className="arrow-back"
        />
        <h3 className="header-notify"> Notifications</h3>
        <p className="manage-notify">
          Choose the notifications you’d like to see — and those you don’t.
        </p>
        <p className="mute-notify">Mute notifications</p>
        <input
          onClick={handleClick}
          className="checkbox-notify"
          type="checkbox"
        />
        {successMsg != "" ? (
          <div
            style={{
              position: "fixed",
              marginTop: "-50px",
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

export default ProtectedTweets;
