import React from "react";
import "../Layout.css";
import SideBar from "../SideBar/SideBar";
import "./Explore.css";
import ExploreHeader from "./ExploreHeader";
import Card from "../Search/Card";
import people from "../Search/people";
import TrendsData from "./TrendsData";
import Trend from "./Trend";
import SearchBox from "../Search/SearchBox"
import WhoToFollow from "../WhoToFollow/WhoToFollow";
function CreateTrends(Trends) {
  return (
    <Trend
      id={Trends.id}
      number={Trends.number}
      type={Trends.type}
      name={Trends.name}
      tweets_num={Trends.tweets_num}
    />
  );
}
//make width same as home/profile
/**
 * @param {object} Trends id, number, type, name, tweets per trend
 * @description Component containing the the trending topics
 * @returns A div component that renders this component
 */ 
function Explore() {
  return (
    <div className="layout">
      <SideBar />
      <div className="feeder">
        <ExploreHeader/>
        {TrendsData.map(CreateTrends)}
      </div>
      <div className="widgets">
        {/* <div className="search"> 
        <SearchBox size="40"  
            styling=
            { {width: "30%",
            marginTop: "-15.5%",
            marginLeft: "70%",
            height:'60%',}}/>
          </div> */}
        <div className="whatsHappening">what's happening</div>
        <div className="whoToFollow">  <WhoToFollow /> </div>
      </div>
    </div>
  );
}

export default Explore;
