import React from "react";
import "../Layout.css";
import SideBar from "../SideBar/SideBar";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./ProtectedTweets.css";
function ProtectedTweets() {
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
        <input className="checkbox-protect" type="checkbox" />
      </div>
      <div className="widgets">
        <div className="search">search</div>
        <div className="whatsHappening">what's happening</div>
        <div className="whoToFollow">who to follow</div>
      </div>
    </div>
  );
}

export default ProtectedTweets;
