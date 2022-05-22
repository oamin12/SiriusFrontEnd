import React from "react";
import "../Layout.css";
import SideBar from "../SideBar/SideBar";
import PostingTweet from "./PostingTweet";
import Tweet from "../Tweet/Tweet.jsx";
import tweets from "./Tweets.js";
import Heading from "./constants/Heading"
import { NavLink } from "react-router-dom";
import SearchBox from "../Search/SearchBox";
import axios from "axios";
import WhoToFollow from "../WhoToFollow/WhoToFollow";
import WhatsHappening from "../WhatsHappening/WhatsHappening";
import "../WhoToFollow/WhoToFollow.css"

 console.log('dah el token ',localStorage.getItem("tokenValue"));
 function getTweet(tweet)
{

  return(
    <Tweet
    key={tweet.key}
    id={tweet.key}
    name={tweet.name}
    userName={tweet.username}
    content={tweet.tweetBody}
    avatar={tweet.userImage}
    image={tweet.tweetMedia}
    video=''
    likeCount={tweet.favoritersCount}
    repliesCount={tweet.repliesCount}
    retweetCount={tweet.retweetersCount}
    bookMarked_flag={tweet.isBookmarkedByUser}
    retweeteded_flag={tweet.isRetweetedByUser==="false"?false:true}
    liked_flag={tweet.isLikedByUser==="false"?false:true}
    isPoll={tweet.poll}

    />

  )
}

/**
 *
 * @param {object} id, name, username, tweet text, user image, tweet images/videos, likes/ replies count, retweet count, bookmarked count
 * @description Component that contains the tweets, the area designed for writing tweets, side Bar and widgets
 * @returns {div} A div that renders this page
 */
function Home(props) {


  const [tweetsInfo,setTweetsInfo ] = React.useState([]);
  const [trendsInfo,setTrendsInfo]=React.useState([]);
  const [addedTweet,setAddedTweet ] = React.useState(false);
  const [DeletedTweet,setDeletedTweet ] = React.useState(false);

  function handleDeletedTweet(){
    setDeletedTweet(true);
  };


  function getTweet2(tweet)
{

  return(
    <Tweet
    key={tweet.key}
    id={tweet.key}
    name={tweet.name}
    userName={tweet.username}
    content={tweet.tweetBody}
    avatar={tweet.userImage}
    image={tweet.tweetMedia}
    video=''
    likeCount={tweet.favoritersCount}
    repliesCount={tweet.repliesCount}
    retweetCount={tweet.retweetersCount}
    bookMarked_flag={tweet.isBookmarkedByUser}
    retweeteded_flag={tweet.isRetweetedByUser==="false"?false:true}
    liked_flag={tweet.isLikedByUser==="false"?false:true}
    isPoll={tweet.poll}
    deleted_flag={handleDeletedTweet}
    />

  )
}

/**
 *
 * @param {object} id, name, username, tweet text, user image, tweet images/videos, likes/ replies count, retweet count, bookmarked count
 * @description Component that contains the tweets, the area designed for writing tweets, side Bar and widgets
 * @returns {div} A div that renders this page
 */


  var token=sessionStorage.getItem("tokenValue");
 console.log('dah el token ',localStorage.getItem("tokenValue"));
  var config = {
  method: 'get',
  url: 'http://34.236.108.123:3000/home/',

  headers: {Authorization:"Bearer "+token}
};
async function GetTweetInfo() {
  let response = '';
  try {
    response = await axios.get('http://34.236.108.123:3000/home/',config).then((res) => res.data);
    //console.log('herererer',response.userName);
    localStorage.setItem("UserName",response.userName);
    localStorage.setItem("Name",response.name);
    localStorage.setItem("Admin",response.isAdmin);

    setTweetsInfo(response.data);
    return (response.data);
  } catch (error) {
    if (error.response) {
      return (error.response);
    }
  }
  return (response);
}

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


  var token=sessionStorage.getItem("tokenValue");
 //console.log('dah el token ',localStorage.getItem("tokenValue"));
  var config = {
  method: 'get',
  url: 'http://34.236.108.123:3000/home/',

  headers: {Authorization:"Bearer "+token}
};
async function GetTweetInfo() {
  let response = '';
  try {
    response = await axios.get('http://34.236.108.123:3000/home/',config).then((res) => res.data);
    //console.log('herererer',response.userName);
    localStorage.setItem("UserName",response.userName);
    localStorage.setItem("Name",response.name);
    setTweetsInfo(response.data);
    return (response.data);
  } catch (error) {
    if (error.response) {
      return (error.response);
    }
  }
  return (response);
}


  function handleAddTweet(){
    setAddedTweet(true);
  };

  React.useEffect(() => {
    (async () => {
      const resp = await GetTweetInfo();
      setTweetsInfo(resp);
    })();
  }, []);
  React.useEffect(() => {
    (async () => {
      const resp = await GetTrendsInfo();
      setTrendsInfo(resp);
    })();
  }, []);

  if (addedTweet===true)
  {
    (async () => {
      const resp = await GetTweetInfo();
      setTweetsInfo(resp);
      setAddedTweet(false);
      //console.log(resp);
    })();  }

    if (DeletedTweet===true)
  {
    (async () => {
      const resp = await GetTweetInfo();
      setDeletedTweet(false);
      //console.log(resp);
    })();  }


  // console.log(tweetsInfo);
  return (
    <div className="layout">
      <SideBar flag_tweet_popuppage={props.flag_tweet_popuppage} />
       <div className="feeder">
       <Heading classname="home_heading" title="Home"/>
       <PostingTweet
       flagconfirm={props.flagconfirm}
       flag_stop_working_from_poll_to_schedule={props.flag_stop_working_from_poll_to_schedule}
       flag={props.flag}
       postingFlag={handleAddTweet} />

    
       {tweetsInfo.map(getTweet2)}
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
        <div className="whoToFollow">
          <WhoToFollow />
        </div>


      </div>
    </div>
  );
}

export default Home;
export {getTweet};
