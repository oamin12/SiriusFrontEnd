import React from "react";
import "./Profile.css";
import ProfileData from "./ProfileData";
import "../Layout.css";
import SideBar from "../SideBar/SideBar";
import Users from "./Users";
import {getTweet} from "../Home/Home.js"
import Hometweets from "../Home/Hometweets.js";
import TweetReplies from "../Home/TweetReplies";
import Media from "../Home/Media";
import { Link, NavLink, useLocation } from "react-router-dom";
import Likes from "../Home/Likes";
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
  var subpage = 1;

  function ProfileSubPage(){
    let location = useLocation();
    
    if (location.pathname=="/profile")
    {
      subpage=1;
    }
    else if (location.pathname=="/profile/with_replies")
    {
      subpage=2;
    }
    else if (location.pathname=="/profile/media")
    {
      subpage=3;
    }
    else if (location.pathname=="/profile/likes")
    {
      subpage=4;
    }
    console.log(subpage);
  }
function Profile() {
  
  return (
    <div className="layout">
      <SideBar />
      <div className="feeder">
      {Users.map(createProfileData)}
      
      {
        ProfileSubPage
        (subpage==1)?Hometweets.map(getTweet):
        (subpage==2)?TweetReplies.map(getTweet):
        (subpage==3)?Media.map(getTweet):
        (subpage==4)?Likes.map(getTweet):
        Hometweets.map(getTweet)
      }
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
