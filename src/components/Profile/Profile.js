import React from "react";
import "./Profile.css";
import ProfileData from "./ProfileData";
import "../Layout.css";
import SideBar from "../SideBar/SideBar";
import Users from "./Users";
import {getTweet} from "../Home/Home.js"
import Tweets from "../Home/Tweets"
function createProfileData(User) {
  return (
      <ProfileData
        key={User.id}
        coverphoto={User.coverphotoURL}
        profilepic={User.profilepic}
        name={User.name}
        username={User.username}
        bio={User.bio}
        location={User.location}
        website={User.website}
        bdate={User.bdate}
        joineddate={User.joineddate}
        followers={User.followers}
        followings={User.followings}
      />
    );
  }
function Profile() {
  return (
    <div className="layout">
      <SideBar />
      <div className="feeder">
      {Users.map(createProfileData)}
      {Tweets.map(getTweet)}
      </div>
      <div className="widgets">
        <div className="search">search</div>
        <div className="whatsHappening">what's happening</div>
        <div className="whoToFollow">who to follow</div>
      </div>
    </div>
  );
}

export default Profile;
