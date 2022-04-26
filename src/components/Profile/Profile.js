import React from "react";
import "./Profile.css";
import ProfileData from "./ProfileData";
import "../Layout.css";
import SideBar from "../SideBar/SideBar";
import Users from "./Users";
import Hometweets from "../Home/Hometweets.js";
import TweetReplies from "../Home/TweetReplies";
import Media from "../Home/Media";
import { Link, NavLink, useLocation } from "react-router-dom";
import Likes from "../Home/Likes";
import GetProfileInfo from "./GetProfileInfo";
import GetUserProfile from "./GetUserProfile";

import Tweet from "../Tweet/Tweet";
function createProfileData(User) {
 


  return (
      <ProfileData
        key={User._id}
        coverphoto={User.coverphotoURL}
        profilepic={User.profilepic}
        name={User.name}
        username={'@'+User.username}
        bio={User.bio}
        location={User.country+", "+User.city}
        website={User.website}
        birthdate={User.birthdate}
        joineddate={User.createdAt}
        followersCount={User.followersCount}
        followingCount={User.followingCount}
        isMe={User.isMe}
      />
    );
  }
  function getTweet(tweet) {
    return (
      <Tweet
        key={tweet.id}
        name={tweet.name}
        userName={tweet.userName}
        content={tweet.content}
        avatar={tweet.avatar}
        image={tweet.image}
        video={tweet.video}
        likeCount={tweet.likeCount}
        repliesCount={tweet.repliesCount}
        retweetCount={tweet.retweetCount}
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
  console.log("BEFORE GETTING",localStorage.getItem("UserProfile"));

  const [ProfileInfo,setProfileInfo ] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const resp = await GetUserProfile(localStorage.getItem("UserProfile"));
      setProfileInfo(resp);
      //console.log("IS ME CHECK GOWA",ProfileInfo.isMe,ProfileInfo.username);

    })();
  }, []);
  console.log("IS ME CHECK",ProfileInfo.isMe,ProfileInfo.username);
  // const [OtherProfileInfo,setOtherProfileInfo ] = React.useState([]);
  // React.useEffect(() => {
  //   (async () => {
  //     const resp = await GetUserProfile(props.userName);
  //     setOtherProfileInfo(resp);
  //   })();
  // }, []);

  
  return (
    
    <div className="layout">
      <SideBar />
      <div className="feeder">
      {createProfileData(ProfileInfo)}
       
      {/* {  ProfileSubPage
        (subpage==1)?Hometweets.map(getTweet):
        (subpage==2)?TweetReplies.map(getTweet):
        (subpage==3)?Media.map(getTweet):
        (subpage==4)?Likes.map(getTweet):
        Hometweets.map(getTweet)
      } */}
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