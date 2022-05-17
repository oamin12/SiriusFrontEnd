import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchBox from "./SearchBox";
import Card from "./Card";
import people from "./people";
import "./Search.css";
import SearchFilter from "./SearchFilter";
import { NavLink } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import "../Layout.css";
import WhoToFollow from "../WhoToFollow/WhoToFollow";
import axios from "axios";
import Tweet from "../Tweet/Tweet.jsx";

function createcard(contact, index) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      username={contact.username}
      bio={contact.bio}
      img={contact.imgURL}
      style={{ marginLeft: "-2%" }}
      followbutton={true}
      styling={{ padding: "3% 15% 3% 15%", marginTop: "5%", marginLeft: "60%" }}
    />
  );
}

var token = localStorage.getItem("tokenValue");
console.log("dah el token ", localStorage.getItem("tokenValue"));
var config = {
  method: "get",
  url: "http://34.236.108.123:3000/home/",

  headers: { Authorization: "Bearer " + token },
};

function getTweet(tweet) {
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
      bookMarked_flag={false}
    />
  );
}
function SearchPage(props) {
  const [tweetsInfo, setTweetsInfo] = React.useState([]);
  const [addedTweet, setAddedTweet] = React.useState(false);

  /**
   *
   * @param {object} id, name, username, tweet text, user image, tweet images/videos, likes/ replies count, retweet count, bookmarked count
   * @description Component that contains the tweets, the area designed for writing tweets, side Bar and widgets
   * @returns {div} A div that renders this page
   */

  async function GetTweetInfo() {
    let response = "";
    try {
      response = await axios
        .get("http://34.236.108.123:3000/home/", config)
        .then((res) => res.data);
      console.log("herererer", response.userName);
      localStorage.setItem("UserName", response.userName);
      setTweetsInfo(response.data);
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
    return response;
  }

  var token = sessionStorage.getItem("tokenValue");
  console.log("dah el token ", localStorage.getItem("tokenValue"));
  var config = {
    method: "get",
    url: "http://34.236.108.123:3000/home/",

    headers: { Authorization: "Bearer " + token },
  };
  async function GetTweetInfo() {
    let response = "";
    try {
      response = await axios
        .get("http://34.236.108.123:3000/home/", config)
        .then((res) => res.data);
      //console.log('herererer',response.userName);
      localStorage.setItem("UserName", response.userName);
      localStorage.setItem("Name", response.name);
      setTweetsInfo(response.data);
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
    return response;
  }

  function handleAddTweet() {
    setAddedTweet(true);
  }

  React.useEffect(() => {
    (async () => {
      const resp = await GetTweetInfo();
      setTweetsInfo(resp);
    })();
  }, []);

  if (addedTweet === true) {
    (async () => {
      const resp = await GetTweetInfo();
      setTweetsInfo(resp);
      setAddedTweet(false);
      //console.log(resp);
    })();
  }

  const [tabsvalue, settabsvalue] = React.useState(1);
  return (
    <div className="searchPage">
      <div className="searchTop">
        <div className="arrowBack">
          <NavLink to="/home">
            <ArrowBackIcon
              fontSize="small"
              sx={{ color: "black", marginLeft: "-100%" }}
            />
          </NavLink>
        </div>
        <SearchBox
          size="80"
          styling={{
            width: "30%",
            marginTop: "-15.5%",
            marginLeft: "28%",
            height: "60%",
          }}
        />

        <div className="moreOptions">
          <MoreHorizIcon fontSize="small" />
        </div>
      </div>
      <SearchFilter tabsvalue={tabsvalue} settabsvalue={settabsvalue} />
      {tabsvalue === 3
        ? people.map(createcard)
        : tabsvalue === 2
        ? tweetsInfo.map(getTweet)
        : tabsvalue === 1
        ? tweetsInfo.map(getTweet)
        : tabsvalue === 4
        ? tweetsInfo.map(getTweet)
        : tweetsInfo.map(getTweet)}
    </div>
  );
}

function Search() {
  return (
    <div className="layout">
      <SideBar />
      <div className="feeder">
        <SearchPage />
      </div>
      <div className="widgets">
        <div className="whatsHappening">what's happening</div>
        <div className="whoToFollow">
          <WhoToFollow />
        </div>
      </div>
    </div>
  );
}

export default Search;
