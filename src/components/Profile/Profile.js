import React from "react";
import "./Profile.css";
import "../Layout.css";
import SideBar from "../SideBar/SideBar";
function Profile() {
  return (
    <div className="layout">
      <SideBar />
      <div className="feeder">feeder</div>
      <div className="widgets">
        <div className="search">search</div>
        <div className="whatsHappening">what's happening</div>
        <div className="whoToFollow">who to follow</div>
      </div>
    </div>
  );
}

export default Profile;
