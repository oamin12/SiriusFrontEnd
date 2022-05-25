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

var token = localStorage.getItem("tokenValue");
console.log("dah el token ", localStorage.getItem("tokenValue"));
var configSearch = {
  method: "get",
  url: "http://34.236.108.123:3000/search?q=f&f=user",
  headers: { Authorization: "Bearer " + token },
};

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
      likeCount={tweet.favoriters.length}
      repliesCount={tweet.replies.length}
      retweetCount={tweet.retweeters.length}
      createdAt={tweet.createdAt}
      bookMarked_flag={tweet.isBookmarkedByMe}
      retweeteded_flag={tweet.isRetweetedByMe}
      liked_flag={tweet.isLikedByMe}
      ifFollowingFlag={tweet.followHim}
    />
  );
}
function createCard(contact) {
  return (
    <div>
      <Card
        key={contact._id}
        name={contact.name}
        username={contact.username}
        img={contact.image}
        followbutton={true}
        bio={contact.bio}
        followHim={contact.followHim === false ? "Follow" : "Following"}
        sx={{ marginLeft: "4%", width: "90px" }}
      />
    </div>
  );
}
function SearchPage(props) {
  const [tweetsInfo_latest, setTweetsInfo_latest] = React.useState([]);
  const [tweetsInfo_top, setTweetsInfo_top] = React.useState([]);
  const [tweetsInfo_media, setTweetsInfo_media] = React.useState([]);
  const [tweetsInfo_users, setTweetsInfo_users] = React.useState([]);
  const [addedTweet, setAddedTweet] = React.useState(false);
  const [value, setvalue] = React.useState("");

  /**
   *
   * @param {object} id, name, username, tweet text, user image, tweet images/videos, likes/ replies count, retweet count, bookmarked count
   * @description Component that contains the tweets, the area designed for writing tweets, side Bar and widgets
   * @returns {div} A div that renders this page
   */
  //----------GETTING SEARCH RESULTS-------------//

  async function GetSearchResults_latest(val) {
    let response = "";
    try {
      response = await axios
        .get("http://34.236.108.123:3000/search?q=" + val + "&f=latest", {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => res.data);
      setTweetsInfo_latest(response.tweets);

      return response.tweets;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
    return response;
  }
  async function GetSearchResults_media(val) {
    let response = "";
    try {
      response = await axios
        .get("http://34.236.108.123:3000/search?q=" + val + "&f=media", {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => res.data);
      setTweetsInfo_media(response.tweets);

      return response.tweets;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
    return response;
  }
  async function GetSearchResults_top(val) {
    let response = "";
    try {
      response = await axios
        .get("http://34.236.108.123:3000/search?q=" + val + "&f=top", {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => res.data);
      setTweetsInfo_top(response.tweets);

      return response.tweets;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
    return response;
  }
  async function GetSearchResults_users(val) {
    let response = "";
    try {
      response = await axios
        .get("http://34.236.108.123:3000/search?q=" + val + "&f=user", {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => res.data);
      setTweetsInfo_users(response.users);
      console.log(response.users);
      return response.users;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
    return response;
  }
  /////////////////////////////////////////////////

  var token = sessionStorage.getItem("tokenValue");

  // function handleAddTweet() {
  //   setAddedTweet(true);
  // }

  React.useEffect(() => {
    (async () => {
      const resp = await GetSearchResults_latest(value);
      setTweetsInfo_latest(resp);
    })();
  }, []);
  React.useEffect(() => {
    (async () => {
      const resp = await GetSearchResults_top(value);
      setTweetsInfo_top(resp);
    })();
  }, []);
  React.useEffect(() => {
    (async () => {
      const resp = await GetSearchResults_media(value);
      setTweetsInfo_media(resp);
    })();
  }, []);
  React.useEffect(() => {
    (async () => {
      const resp = await GetSearchResults_users(value);
      setTweetsInfo_users(resp);
    })();
  }, []);

  function handlesearch() {
    console.log("this is it", value);
    if (tabsvalue === 1) GetSearchResults_top(value);
    else if (tabsvalue === 2) GetSearchResults_latest(value);
    else if (tabsvalue === 3) GetSearchResults_users(value);
    else if (tabsvalue === 4) GetSearchResults_media(value);
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
        <div style={{ width: "1200px" }}>
          <SearchBox flagfromsearch={1} setvalue={setvalue} value1={value} />
        </div>
        <div className="moreOptions">
          <MoreHorizIcon fontSize="small" />
        </div>
      </div>
      <SearchFilter
        tabsvalue={tabsvalue}
        settabsvalue={settabsvalue}
        handlesearch={handlesearch}
      />
      {tabsvalue === 1
        ? tweetsInfo_top?.map(getTweet)
        : tabsvalue === 2
        ? tweetsInfo_latest?.map(getTweet)
        : tabsvalue === 3
        ? tweetsInfo_users?.map(createCard)
        : tweetsInfo_media?.map(getTweet)}
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
