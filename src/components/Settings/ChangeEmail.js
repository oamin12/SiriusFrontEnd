import React from "react";
import "../Layout.css";
import "./ChangeEmail.css";
import SideBar from "../SideBar/SideBar";
import { useNavigate } from "react-router-dom";
import WhoToFollow from "../WhoToFollow/WhoToFollow";
import SearchBox from "../Search/SearchBox";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function ChangeUsername() {
  let navigate = useNavigate();
  return (
    <div className="layout">
      <SideBar />
      <div className="feeder">
        <ArrowBackIcon
          onClick={() => navigate("/settings/accountinformation")}
          className="arrow-back"
        />
        <h3 className="header-email">Change email</h3>
        <input
          className="email-email"
          type="email"
          placeholder="Email"
          name="email"
        />
        <hr className="line-password"></hr>
        <button className="update-email">Update email address</button>
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
