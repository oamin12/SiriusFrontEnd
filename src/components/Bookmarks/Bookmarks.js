import React from "react";
import BookmarksHeader from "./BookmarksHeader";
import "./Bookmarks.css";
import "../Layout.css";
import Tweet from "../Tweet/Tweet";
import SideBar from "../SideBar/SideBar";
import tweets from "./BookmarkedTweets";
import EmptyBookmarksPage from "./EmptyBookmarksPage";

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

function Bookmarks() {
  const [empty, setEmpty] = React.useState(tweets.length == 0 ? true : false);
  console.log(empty);
  function handleEmpty() { 
    setEmpty(true);
  }
  return (
    <div className="layout">
      <SideBar />
      <div className="feeder">
        <BookmarksHeader name="Bookmarks" username="@sohad" handleFunction={handleEmpty}/>
        {empty === true && <EmptyBookmarksPage />}
        {empty === false && tweets.map(getTweet)}
      </div>
      <div className="widgets">
        <div className="search">search</div>
        <div className="whatsHappening">what's happening</div>
        <div className="whoToFollow">who to follow</div>
      </div>
    </div>
  );
}
console.log(tweets);
export default Bookmarks;
