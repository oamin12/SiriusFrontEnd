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
import SearchBox from "../Search/SearchBox"
import WhoToFollow from "../WhoToFollow/WhoToFollow";
import { Puff } from  'react-loader-spinner'
import Tweet from "../Tweet/Tweet";

function createProfileData(User,protectedAccount) {
 
  return (
      <ProfileData
        key={User.id}
        coverphoto={User.coverphotoURL}
        profilepic={User.image}
        name={User.name}
        username={User.username}
        bio={User.bio}
        location={User.country +", " + User.city}
        website={User.website}
        birthdate={User.birthdate}
        joineddate={User.createdAt}
        followersCount={User.followersCount}
        followingCount={User.followingCount}
        isMe={User.isMe}
        followed={User.followHim}
        protected={protectedAccount}

      />
    );
  }
  function getTweet(tweet) {
    return (
      <Tweet
        key={tweet.id}
        name={tweet.name}
        userName={tweet.username}
        content={tweet.body}
        avatar={tweet.image}
        image={""}
        video={""}
        likeCount={tweet.favoriters.length}
        repliesCount={tweet.replies.length}
        retweetCount={tweet.retweeters.length}
      />
    );
  }
  var subpage = 1;

  
 /**
   * @description Profile Page that contains all information of user, all tweets that he tweeted, retweeted, liked, replied, or media
   * @returns {div} 
   */
function Profile() {
  //console.log("BEFORE GETTING",localStorage.getItem("UserProfile"));

  const [ProfileInfo,setProfileInfo ] = React.useState([]);
  const [profileTweets,setProfileTweets ] = React.useState([]);
  const [profileReplies,setProfileReplies ] = React.useState([]);
  const [ProfileInfoReplies,setProfileInfoReplies ] = React.useState([]);
  const [namee,setNamee ] = React.useState(null);
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
          // url: 'http://34.236.108.123:3000/'+UserName,
          headers: {Authorization:"Bearer "+token }
        };
      let response = '';
    try {
      response = await axios.get('http://34.236.108.123:3000/'+UserName,config).then((res) => res.data);
      //response = await axios.get("http://localhost:3001/User").then((res) => res.data);
      setProfileInfo(response);
      
      return (response);
    } catch (error) {
      if (error.response) {
        return (error.response);
      }
    }
    return (response);
  }


  React.useEffect(() => {
    (async () => {
      const resp = await GetUserProfile(localStorage.getItem("UserProfile"));
      setProfileInfo(resp);
      setProfileTweets(resp.tweets);
      setNamee(resp.name);
      

    })();
  }, []);
  console.log(ProfileInfo);
  async function GetUserProfileReplies(UserName) {
    console.log("INSIDE FUNCTION",UserName);
    var config = {
        method: 'get',
        // url: 'http://34.236.108.123:3000/'+UserName,
        headers: {Authorization:"Bearer "+token }
      };
    let response = '';
  try {
    response = await axios.get('http://34.236.108.123:3000/'+UserName+'/with_replies',config).then((res) => res.data);
    //response = await axios.get("http://localhost:3001/User").then((res) => res.data);
    setProfileInfoReplies(response);
    return (response);
  } catch (error) {
    if (error.response) {
      return (error.response);
    }
  }
  return (response);
}


React.useEffect(() => {
  (async () => {
    const resp = await GetUserProfileReplies(localStorage.getItem("UserProfile"));
    setProfileInfoReplies(resp);
    setProfileReplies(resp.tweets)
    console.log(resp);
  })();
}, []);
let protectedAccount = (!ProfileInfo.isMe && !ProfileInfo.followsHim && ProfileInfo.protectedTweets);
console.log("protected "+protectedAccount);
  if(namee)
  {
  return (
    
    <div className="layout">
      <SideBar />
      <div className="feeder">
      {
        createProfileData(ProfileInfo, protectedAccount)}
        
    {protectedAccount ? null:
      <div>
      {  ProfileSubPage
        (subpage==1)?Hometweets?.map(getTweet):
        (subpage==2)?profileReplies?.map(getTweet):
        (subpage==3)?Media?.map(getTweet):
        (subpage==4)?Likes?.map(getTweet):
        profileTweets?.map(getTweet)
      }
      </div>
    }
      </div>
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
    else 
    {
      return (
        <div>     
        <Puff 
          color="#00BFFF" 
          height={750} 
          width={750} 
          ariaLabel='loading'
        />
        </div>

      );
    }
}

export default Profile;
