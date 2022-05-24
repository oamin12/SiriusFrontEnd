import React from "react";
import "./LikeNotif.css";
import { Avatar } from "@mui/material";
import Tweet from "../Tweet/Tweet";
import getTweet from "./getTweet";
import axios from "axios";
import { NavLink } from "react-router-dom";

function getTweetNotif(tweet) {
  return (
    <Tweet
      key={tweet.key}
      id={tweet.key}
      name={tweet.name}
      userName={tweet.username}
      content={tweet.tweetBody}
      avatar={tweet.userImage}
      image={tweet.tweetMedia}
      video=""
      likeCount={tweet.favoritersCount}
      repliesCount={tweet.repliesCount}
      retweetCount={tweet.retweetersCount}
      bookMarked_flag={tweet.isBookmarkedByUser}
      retweeteded_flag={tweet.isRetweetedByUser === "false" ? false : true}
      liked_flag={tweet.isLikedByUser === "false" ? false : true}
      isPoll={tweet.poll}
      ifFollowingFlag={tweet.isFollowing}
      createdAt={tweet.createdAt}
    />
  );
}
function LikeNotif(props) {
  const [tweet, setTweet] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const resp = await getTweet(props.id);
      setTweet([resp.tweetData]);
    })();
  }, []);
  return (
    <div className="TweetNotif">
      <Avatar alt="Profile picture" src={props.image} />
      <h4 className="TweetNotifHeader">
        {props.notifText}
      </h4>
      <div className="taggedTweet">{tweet.map(getTweetNotif)}</div>
    </div>
  );
}
export default LikeNotif;
//23mly src elavatar
//<p className="TweetNotifText"></p>
