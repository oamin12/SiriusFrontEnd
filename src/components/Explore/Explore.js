import React from "react";
import "../Layout.css";
import SideBar from "../SideBar/SideBar";
import "./Explore.css";
import ExploreHeader from "./ExploreHeader";
import Card from "../Search/Card";
import people from "../Search/people";
import TrendsData from "./TrendsData";
import Trend from "./Trend";
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
function Explore() {
  return (
    <div className="layout">
      <SideBar />
      <div className="feeder">
        <ExploreHeader/>
        {TrendsData.map(CreateTrends)}
      </div>
      <div className="widgets">
        <div className="search">search</div>
        <div className="whatsHappening">what's happening</div>
        <div className="whoToFollow">who to follow</div>
      </div>
    </div>
  );
}

export default Explore;
