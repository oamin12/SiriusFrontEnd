import React from "react";
import BookmarksHeader from "./BookmarksHeader";
import "./Bookmarks.css";
import "../Layout.css";
import Tweet from "../Tweet/Tweet";
import SideBar from "../SideBar/SideBar";
import getUser from "../User";
import EmptyBookmarksPage from "./EmptyBookmarksPage";
import getBookmarks from "./BookmarkedTweets";
import axios from "axios";

function getTweet(tweet) {
  return (
    <Tweet
      key={tweet.id}
      id={tweet.id}
      name={tweet.name}
      userName={tweet.userName}
      content={tweet.content}
      avatar={tweet.avatar}
      image={tweet.image}
      video={tweet.video}
      likeCount={tweet.likeCount}
      repliesCount={tweet.repliesCount}
      retweetCount={tweet.retweetCount}
      bookMarked_flag={true}
    />
  );
}
/**
 * @description A component which contains the bookmarks header component, the bookmarked tweets, sidebar, and the widgets component.
 * @returns {div} returns a div that contains the component
 */
function Bookmarks() {
  const [BookmarkedTweets, setBookmarkedTweets] = React.useState([]);
  const [User, setUser] = React.useState([]);
  const [wait, setWait] = React.useState(true);

  const [empty, setEmpty] = React.useState(
    BookmarkedTweets.length === 0 ? true : false
  );

  //console.log(BookmarkedTweets);

  React.useEffect(() => {
    (async () => {
      const resp = await getBookmarks();
      setBookmarkedTweets(resp);
      if (resp.length === 0) {
        setWait(false);
      } else setEmpty(false);
    })();
  }, []);
  //----getting User----//
  React.useEffect(() => {
    (async () => {
      const resp = await getUser();
      setUser(resp);
    })();
  }, []);

  //-------------------------------------//

  const [index, setIndex] = React.useState(false);
  function HandleIndex() {
    setIndex(true);
  }
  function HandleDeleteAllBookmarks() {
    if (index === true) {
      // post request
      (async () => {
        for (let i = 0; i < BookmarkedTweets.length; i++) {
          await axios.delete(
            "http://localhost:3001/Bookmarks/" + BookmarkedTweets[i].id
          );
          console.log(BookmarkedTweets[i].id);
        }
        const resp = await getBookmarks();
        setBookmarkedTweets(resp);
        setEmpty(true);
        setWait(false);
        //console.log(resp);
      })();
      setIndex(false);

      console.log(true);
    }
  }

  HandleDeleteAllBookmarks();
  //------------------------------------//

  return (
    <div className="layout">
      <SideBar />
      <div className="feeder">
        <BookmarksHeader
          name="Bookmarks"
          username={"@" + localStorage.getItem("UserName")}
          handleIndex={HandleIndex}
        />
        {empty === true && wait === false && <EmptyBookmarksPage />}
        {empty === false && BookmarkedTweets.map(getTweet)}
      </div>
      <div className="widgets">
        <div className="search">search</div>
        <div className="whatsHappening">what's happening</div>
        <div className="whoToFollow">who to follow</div>
      </div>
    </div>
  );
}

export default Bookmarks;
/*const sendGetRequest = async () => {
    const res = await getBookmarks();
    console.log(res);
  };
  sendGetRequest();
  */
/*React.useEffect(() => {
    axios
      .get("http://localhost:3001/Bookmarks")
      .then(response =>  setBookmarkedTweets(response.data));
  }, []);*/
