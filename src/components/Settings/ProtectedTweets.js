import React, { useState } from "react";
import "../Layout.css";
import SideBar from "../SideBar/SideBar";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import WhoToFollow from "../WhoToFollow/WhoToFollow";
import SearchBox from "../Search/SearchBox";
import "./ProtectedTweets.css";
import axios from "axios";

function ProtectedTweets() {
  var token = sessionStorage.getItem("tokenValue");
  const [successMsg, setSucessMsg] = useState("");
  async function Protect() {
    let response = "";
    try {
      response = await axios
        .patch(
          "http://34.236.108.123:3000/settings/Account-info/Protected-tweets",
          {},
          { headers: { Authorization: "Bearer " + token } }
        )
        .then((res) => res.data);
      if (response.success == true) {
        setSucessMsg("Tweets Protected succesfully!");
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
    Protect();
  }
  let navigate = useNavigate();
  return (
    <div className="layout">
      <SideBar />
      <div className="feeder">
        <ArrowBackIcon
          onClick={() => navigate("/settings/accountinformation")}
          className="arrow-back"
        />
        <h3 className="header-protect"> Protected Tweets</h3>
        <p className="manage-protect">
          Manage what information you allow other people on Sirius to see.
        </p>
        <p className="protect-protect">Protect your Tweets</p>
        <p className="select-protect">
          When selected, your Tweets and other account information are only
          visible to people who follow
          <br /> you.
          <a
            className="learn-protect"
            target="_blank"
            href="https://help.twitter.com/en/safety-and-security/public-and-protected-tweets"
          >
            {" "}
            Learn more
          </a>
        </p>
        <input
          onClick={handleClick}
          className="checkbox-protect"
          type="checkbox"
        />
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

export default ProtectedTweets;
