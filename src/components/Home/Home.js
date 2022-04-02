import React from "react";
import "../Layout.css";
import SideBar from "../SideBar/SideBar";
import PostingTweet from "./PostingTweet";

function Home(props) {
  return (
    <div className="layout">
      <SideBar />
      <div classfName="feeder">
        <PostingTweet flag={props.flag} />
      </div>
      <div className="widgets">
        <div className="search">search</div>
        <div className="whatsHappening">what's happening</div>
        <div className="whoToFollow">who to follow</div>
      </div>
    </div>
  );
}

export default Home;
