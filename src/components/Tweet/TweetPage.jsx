import React from "react";
import "../Layout.css";
import SideBar from "../SideBar/SideBar";
import TweetPageData from "./TweetPageData";
function TweetPage() {
  return (
    <div className="layout">
      <SideBar />
      <div className="feeder">
          <TweetPageData/>
      </div>
      <div className="widgets">
        <div className="search">search</div>
        <div className="whatsHappening">what's happening</div>
        <div className="whoToFollow">who to follow</div>
      </div>
    </div>
  );
}

export default TweetPage;