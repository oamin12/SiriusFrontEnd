import React from "react";
import "./Display.css";
import "../Layout.css";
import SideBar from "../SideBar/SideBar";
import WhoToFollow from "../WhoToFollow/WhoToFollow";
import SearchBox from "../Search/SearchBox";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
function Display() {
  let navigate = useNavigate();
  return (
    <div className="layout">
      <SideBar />
      <div className="feeder">
        <ArrowBackIcon
          onClick={() => navigate("/settings")}
          className="arrow-back"
        />
        <h3 className="header-display">Display</h3>
        <hr className="line-deactivate-display"></hr>
        <h4 className="turn-display">Toggle Dark Mode</h4>
        <input className="checkbox-display" type="checkbox" />
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

export default Display;
