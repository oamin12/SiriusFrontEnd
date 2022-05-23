import React from "react";
import BookmarksHeader from "./BookmarksHeader";
import "./Bookmarks.css";
import "../Layout.css";
import Tweet from "../Tweet/Tweet";
import SideBar from "../SideBar/SideBar";
import getUser from "../User";
import EmptyBookmarksPage from "./EmptyBookmarksPage";
import axios from "axios";
import SearchBox from "../Search/SearchBox"
import WhoToFollow from "../WhoToFollow/WhoToFollow";
import WhatsHappening from "../WhatsHappening/WhatsHappening";

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
    />

  )
}
/**
 * @description A component which contains the bookmarks header component, the bookmarked tweets, sidebar, and the widgets component.
 * @returns {div} returns a div that contains the component
 */
function Bookmarks() {
  const [BookmarkedTweets, setBookmarkedTweets] = React.useState([]);
  const [BookmarkedTweetsId, setBookmarkedTweetsId] = React.useState([]);
  const [BookmarkedSuccess,setBookmarkedSuccess] = React.useState("");
  const [tweets,setTweetsArray] = React.useState([]);
  const [tweetsInfo,setTweetsInfo ] = React.useState({});
  const [Name,setName ] = React.useState();

  const [User, setUser] = React.useState([]);
  const [wait, setWait] = React.useState(true);

  const [empty, setEmpty] = React.useState(
    BookmarkedTweets.length === 0 ? true : false
  );

  //console.log(BookmarkedTweets);
  var token=sessionStorage.getItem("tokenValue");


  async function GetTweetInfo(tweetid) {
    let response = '';
    let response2 = '';
    try {
      response = await axios.get('http://34.236.108.123:3000/home/'+tweetid+'/getTweetById',{ headers: { Authorization: "Bearer " + token }}).then((res) => res.data);
      response2=response.tweetData;
      response2['key']=tweetid;
      setTweetsInfo(response2);
      setTweetsArray(oldArray => [...oldArray,response2] );
      setTweetsArray(...response2);
      //tweets.push(response2);
      setName(response.tweetData.name);
      return (response2);
    } catch (error) {
      if (error.response) {
        return (error.response);
      }
    }

    return (response);
  }
//--getting Bookmarked Tweet---//

    var config = {
      method: 'get',
      url: 'http://34.236.108.123:3000/home/bookmarkedTweets',
      headers: {Authorization:"Bearer "+token}
      };
    var config2 = {
      method: 'delete',
      url: 'http://34.236.108.123:3000/home/deleteBookmarkedTweets',
      headers: {Authorization:"Bearer "+token}
      };
      async function getBookmarks() {
      let response = '';
      try {
        response = await axios.get('http://34.236.108.123:3000/home/bookmarkedTweets',config).then((res) => res.data);
        setBookmarkedTweetsId(response.bookmarkedTweets);
        setBookmarkedSuccess(response.message);
        return (response.bookmarkedTweets);
      } catch (error) {
        if (error.response) {

          return (error.response);
        }
      }
      return (response);
    }
    React.useEffect(() => {
      (async () => {
        const resp = await getBookmarks();
        setBookmarkedTweetsId(resp);
        if (resp.length === 0)
        {
          setWait(false);
        } else setEmpty(false);
      })();
      }, []);

      if(BookmarkedSuccess==="Success")
      {
        for(let i = 0; i < BookmarkedTweetsId.length; i++)
        {
          GetTweetInfo(BookmarkedTweetsId[i]);
        }


        console.log(tweets);
        setBookmarkedSuccess("done");
      }


      // ----getting User----//
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
          await axios.delete(
            'http://34.236.108.123:3000/home/deleteBookmarkedTweets',config2
          );
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
        {empty === false && BookmarkedSuccess==="done" &&tweets.map(getTweet)}
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
