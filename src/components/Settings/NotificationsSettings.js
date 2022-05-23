import React from "react";
import "../Layout.css";
import SideBar from "../SideBar/SideBar";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import WhoToFollow from "../WhoToFollow/WhoToFollow";
import SearchBox from "../Search/SearchBox";
import "./NotificationsSettings.css";
function ProtectedTweets() {
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
        <input className="checkbox-notify" type="checkbox" />
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
