import React from "react";
import "./Messages.css";
import "../Layout.css";
import SideBar from "../SideBar/SideBar";
function Messages() {
  return (
    <div className="layout">
      <SideBar />
      <div className="feeder">
      </div>
      <div className="widgets">
        <div className="search">search</div>
        <div className="whatsHappening">what's happening</div>
        <div className="whoToFollow">who to follow</div>
      </div>
    </div>
  );
}

export default Messages;
