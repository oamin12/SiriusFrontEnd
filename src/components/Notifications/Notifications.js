import React from "react";
import "./Notifications.css";
import "../Layout.css";
import SideBar from "../SideBar/SideBar";
import NotificationsHeader from "./NotificationsHeader";
function Notifications() {
  return (
    <div className="layout">
      <SideBar />
      <div className="feeder"><NotificationsHeader /></div>
      <div className="widgets">
        <div className="search">search</div>
        <div className="whatsHappening">what's happening</div>
        <div className="whoToFollow">who to follow</div>
      </div>
    </div>
  );
}

export default Notifications;
