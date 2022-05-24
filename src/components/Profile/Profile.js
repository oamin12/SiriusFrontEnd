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
import WhatsHappening from "../WhatsHappening/WhatsHappening";


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
        country={User.country}
        city={User.city}
        website={User.website}
        birthdate={User.birthdate}
        joineddate={User.createdAt}
        followersCount={User.followersCount}
        followingCount={User.followingCount}
        isMe={User.isMe}
        followed={User.followHim}
        protected={protectedAccount}
        pending={User.pending}

      />
    );
  }
  function getTweet(tweet) {
    return (
      <Tweet
        key={tweet._id}
        id={tweet._id}
        name={tweet.name}
        userName={tweet.username}
        content={tweet.body}
        avatar={tweet.image}
        image={tweet.media}
        video={""}
        likeCount={tweet.favoriters.length}
        repliesCount={tweet.replies.length}
        retweetCount={tweet.retweeters.length}
        //bookMarked_flag={tweet.isBookmarkedByUser}
        retweeteded_flag={tweet.isRetweetedByMe}
        liked_flag={tweet.isLikedByMe}
        ifFollowingFlag={tweet.isFollowing}

      />
    );
    // key={tweet.key}
    // id={tweet.key}
    // name={tweet.name}
    // userName={tweet.username}
    // content={tweet.tweetBody}
    // avatar={tweet.userImage}
    // image={tweet.tweetMedia}
    // video=''
    // likeCount={tweet.favoritersCount}
    // repliesCount={tweet.repliesCount}
    // retweetCount={tweet.retweetersCount}
    // bookMarked_flag={tweet.isBookmarkedByUser}
    // retweeteded_flag={tweet.isRetweetedByUser==="false"?false:true}
    // liked_flag={tweet.isLikedByUser==="false"?false:true}
    // isPoll={tweet.poll}
    // isRetweet={tweet.isRetweet}
    // deleted_flag={handleDeletedTweet}
    // handleAddRewteet={handleAddTweet}
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
  const [ProfileLikes,setProfileLikes ] = React.useState([]);
  const [ProfileMedia,setProfileMedia ] = React.useState([]);
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
////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////Likes///////////////////////////////////////////////////
async function GetUserProfileLikes(UserName) {
  console.log("INSIDE FUNCTION",UserName);
  let response = '';
try {
  response = await axios.get('http://34.236.108.123:3000/'+UserName+'/likes',{headers: {Authorization:"Bearer "+token} }).then((res) => res.data);
  
  return (response.likes);
} catch (error) {
  if (error.response) {
    return (error.response);
  }
}
return (response);
}


React.useEffect(() => {
(async () => {
  const resp = await GetUserProfileLikes(localStorage.getItem("UserProfile"));
  setProfileLikes(resp);
})();
}, []);
///////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////MEDIA//////////////////////////////////////////////////
async function GetUserProfileMedia(UserName) {
  console.log("INSIDE FUNCTION",UserName);
  let response = '';
try {
  response = await axios.get('http://34.236.108.123:3000/'+UserName+'/media',{headers: {Authorization:"Bearer "+token} }).then((res) => res.data);
  
  return (response.media);
} catch (error) {
  if (error.response) {
    return (error.response);
  }
}
return (response);
}

React.useEffect(() => {
(async () => {
  const resp = await GetUserProfileMedia(localStorage.getItem("UserProfile"));
  setProfileMedia(resp);
})();
}, []);
///////////////////////////////////////////////////////////////////////////////////////////////

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
//-----------WHATSHAPPENING----------//
const [trendsInfo,setTrendsInfo]=React.useState([]);
var config2 = {
  method: "get",
  url: "http://34.236.108.123:3000/explore",
  headers: { Authorization: "Bearer " + token },
};
async function GetTrendsInfo() {
  let response = "";
  try {
    response = await axios
      .get("http://34.236.108.123:3000/explore", config2)
      .then((res) => res.data);
    //console.log(response.tweetData);
    setTrendsInfo(response.hashtags);

    return response.hashtags;
  } catch (error) {
    if (error.response) {
      return error.response;
    }
  }

  return response;
}
React.useEffect(() => {
  (async () => {
    const resp = await GetTrendsInfo();
    setTrendsInfo(resp);
  })();
}, []);
  //------------------------------------//
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
        (subpage==3)?ProfileMedia?.map(getTweet):
        (subpage==4)?ProfileLikes?.map(getTweet):
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
          <div className="whatsHappening">
          <WhatsHappening WhatsHappening={trendsInfo}/>
        </div> 
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
