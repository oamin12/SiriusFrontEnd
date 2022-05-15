import React from "react";
import "../Layout.css";
import SideBar from "../SideBar/SideBar";
import PostingTweet from "./PostingTweet";
import Tweet from "../Tweet/Tweet.jsx";
import tweets from "./Tweets.js";
import Heading from "./constants/Heading";
import { NavLink } from "react-router-dom";
import SearchBox from "../Search/SearchBox";
import axios from "axios";



 function getTweet(tweet)
 {

   return(
     <Tweet
     key={tweet.key}
     name={tweet.name}
     userName={tweet.username}
     content={tweet.tweetBody}
     avatar={tweet.userImage}
     image={tweet.tweetMedia}
     video=''
     likeCount={tweet.favoritersCount}
     repliesCount={tweet.repliesCount}
     retweetCount={tweet.retweetersCount}
     />

   )
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

/**
 *
 * @param {object} id, name, username, tweet text, user image, tweet images/videos, likes/ replies count, retweet count, bookmarked count
 * @description Component that contains the tweets, the area designed for writing tweets, side Bar and widgets
 * @returns {div} A div that renders this page
 */
function Home(props) {
  const [tweetsInfo, setTweetsInfo] = React.useState([]);
  const [addedTweet, setAddedTweet] = React.useState(false);

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

  console.log(tweetsInfo);
  return (
    <div className="layout">
      <SideBar />
       <div className="feeder">
       <Heading/>
       <PostingTweet
       weekdayName={props.weekdayName}
       month={props.month}
       date={props.date}
       year={props.year_toset_theyear_value}
       time={props.time}
       minutes={props.minutes}
       hours={props.hours}
       am_pm={props.am_pm}
       flagconfirm={props.flagconfirm}
       flag_stop_working_from_poll_to_schedule={props.flag_stop_working_from_poll_to_schedule} flag={props.flag} postingFlag={handleAddTweet}/>
       {tweetsInfo.map(getTweet)}
      </div>


      <div className="widgets">
        <div className="search">
          <NavLink to="/search">
            <SearchBox size="40" />
          </NavLink>
        </div>
        <NavLink to="/signin">
          <div className="whatsHappening">what's happening</div>
        </NavLink>
        <div className="whoToFollow">who to follow</div>
      </div>
    </div>
  );
}

export default Home;
export { getTweet };
