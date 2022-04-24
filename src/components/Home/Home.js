import React from "react";
import "../Layout.css";
import SideBar from "../SideBar/SideBar";
import PostingTweet from "./PostingTweet";
import Tweet from "../Tweet/Tweet.jsx";
import tweets from "./Tweets.js";
import Heading from "./constants/Heading"
import { NavLink } from "react-router-dom";
import axios from 'axios';



function getTweet(tweet)
{
  return(
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

  )
}


function Home(props) {


let getUsers = async () => {
  let res = await axios.get("http://localhost:3001/posts");
  console.log(res);
};
getUsers();
  return (
    

    <div className="layout">
      <SideBar />
       <div className="feeder">
       <Heading/>
       <PostingTweet flag={props.flag} />
       {tweets.map(getTweet)}
      </div> 
      
      
      <div className="widgets">
        <NavLink to="/search"><div className="search">search</div></NavLink>
        <NavLink to="/signin"><div className="whatsHappening">what's happening</div></NavLink>
        <div className="whoToFollow">who to follow</div>
      </div>
    </div>
  );
}

export default Home;
export {getTweet};


