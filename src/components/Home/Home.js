import React from "react";
import "../Layout.css";
import SideBar from "../SideBar/SideBar";

function Home() {
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

export default Home;
