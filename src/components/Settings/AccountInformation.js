import React from "react";
import SideBar from "../SideBar/SideBar";
import "./AccountInformation.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function AccountInformation() {
  let navigate = useNavigate();
  return (
    <div className="layout">
      <SideBar />
      <div className="feeder">
        <ArrowBackIcon
          onClick={() => navigate("/settings")}
          className="arrow-back"
        />
        <h3 className="header-account">Account Information</h3>
        <button
          onClick={() => navigate("/settings/changeusername")}
          className="username-account"
        >
          Username
          <span className="info1">Change your username</span>
          <ArrowForwardIosIcon fontSize="small" className="arrow1-account" />
        </button>
        <button
          onClick={() => navigate("/settings/changeemail")}
          className="email-account"
        >
          Email
          <span className="info1">Change your email</span>
          <ArrowForwardIosIcon fontSize="small" className="arrow2-account" />
        </button>
        <hr className="line-account"></hr>
        <button
          onClick={() => navigate("/settings/protectedtweets")}
          className="protect-account"
        >
          Protected Tweets
          <span className="info1">
            Manage what information you allow other people on Twitter to see.
          </span>
          <ArrowForwardIosIcon fontSize="small" className="arrow3-account" />
        </button>
        <hr className="line2-account"></hr>
      </div>
      <div className="widgets">
        <div className="search">search</div>
        <div className="whatsHappening">what's happening</div>
        <div className="whoToFollow">who to follow</div>
      </div>
    </div>
  );
}

export default AccountInformation;
