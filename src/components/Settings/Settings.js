import React from "react";
import "./Settings.css";
import "../Layout.css";
import SideBar from "../SideBar/SideBar";
import WhoToFollow from "../WhoToFollow/WhoToFollow";
import SearchBox from "../Search/SearchBox";
function Settings() {
  return (
    <div className="layout">
      <SideBar />
      <div className="feeder">feeder</div>
      <div className="widgets">
        <div className="search">
      <SearchBox size="40"  
            styling=
            { {width: "30%",
            marginTop: "-15.5%",
            marginLeft: "70%",
            height:'60%',}}/>
          </div> 
        <div className="whatsHappening">what's happening</div>
        <div className="whoToFollow">  <WhoToFollow /> </div>
    </div>
    </div>
  );
}

export default Settings;
