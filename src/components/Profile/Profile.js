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
import axios from "axios";


import Tweet from "../Tweet/Tweet";
function createProfileData(User) {
 
  return (
      <ProfileData
        key={User._id}
        coverphoto={User.coverphotoURL}
        profilepic={User.profilepic}
        name={User.name}
        username={User.username}
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

  
 /**
   * @description Profile Page that contains all information of user, all tweets that he tweeted, retweeted, liked, replied, or media
   * @returns {div} 
   */
function Profile() {
  console.log("BEFORE GETTING",localStorage.getItem("UserProfile"));

  const [ProfileInfo,setProfileInfo ] = React.useState([]);
  function ProfileSubPage(){
    
    let location = useLocation();
    
    if (location.pathname==="/"+ProfileInfo.username)
    {
      subpage=1;
    }
    else if (location.pathname==="/"+ProfileInfo.username+"/with_replies")
    {
      subpage=2;
    }
    else if (location.pathname==="/"+ProfileInfo.username+"/media")
    {
      subpage=3;
    }
    else if (location.pathname==="/"+ProfileInfo.username+"/likes")
    {
      subpage=4;
    }
    console.log(subpage);
  }

  var token = sessionStorage.getItem("tokenValue");

  async function GetUserProfile(UserName) {
      console.log("INSIDE FUNCTION",UserName);
      var config = {
          method: 'get',
          url: 'http://34.236.108.123:3000/'+UserName,
          headers: {Authorization:"Bearer "+token }
        };
      let response = '';
    try {
      response = await axios.get('http://34.236.108.123:3000/'+UserName,config).then((res) => res.data);
      setProfileInfo(response);
      return (response);
    } catch (error) {
      if (error.response) {
        return (error.response);
      }
    }
    return (response);
  }
  GetUserProfile(localStorage.getItem("UserProfile"));

  // React.useEffect(() => {
  //   (async () => {
  //     const resp = await GetUserProfile(localStorage.getItem("UserProfile"));
  //     setProfileInfo(resp);
  //     //console.log("IS ME CHECK GOWA",ProfileInfo.isMe,ProfileInfo.username);

  //   })();
  // }, []);
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
       
      {  ProfileSubPage
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