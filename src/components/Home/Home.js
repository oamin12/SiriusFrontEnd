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

var config = {
  method: 'get',
  url: 'http://localhost:3001/Tweets',
  headers: { }
};
async function GetTweetInfo() {
  let response = '';
  try {
    response = await axios.get('http://localhost:3001/Tweets',config).then((res) => res.data);
    return (response);
  } catch (error) {
    if (error.response) {
      return (error.response);
    }
  }

  return (response);
}

// function getTweet(tweet)
// {
  
//   return(
//     <Tweet
//     key={tweet.key}
//     name={tweet.name}
//     userName={tweet.username}
//     content={tweet.tweetBody}
//     avatar={tweet.userImage}
//     image={tweet.tweetMedia}
//     video=''
//     likeCount={tweet.favoritersCount}
//     repliesCount={tweet.repliesCount}
//     retweetCount={tweet.retweetersCount}
//     />

//   )
// }
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

function Home(props) {
  
  const [tweetsInfo,setTweetsInfo ] = React.useState([]);
  const [addedTweet,setAddedTweet ] = React.useState(false);

  function handleAddTweet(){
    setAddedTweet(true);
  };
  
  React.useEffect(() => {
    (async () => {
      const resp = await GetTweetInfo();
      setTweetsInfo(resp);
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


  console.log(tweetsInfo);  
  return (
    <div className="layout">
      <SideBar />
       <div className="feeder">
       <Heading/>
       <PostingTweet flag={props.flag} postingFlag={handleAddTweet} />
       {tweetsInfo.map(getTweet)}
      </div> 
      
      
      <div className="widgets">
        <div className="search"><NavLink to="/search"><SearchBox size="40"/></NavLink></div>
        <NavLink to="/signin"><div className="whatsHappening">what's happening</div></NavLink>
        <div className="whoToFollow">who to follow</div>
      </div>
    </div>
  );
}

export default Home;
export {getTweet};


