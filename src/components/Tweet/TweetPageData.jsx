import React from "react";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import "./TweetPage.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import Tweet from "./Tweet";
import axios from "axios";
import PostingTweet from "../Home/PostingTweet";
import { Puff } from  'react-loader-spinner'
import { getTweet } from "../Home/Home";

//resolve back arrow


function TweetPageData(props) {

    const [tweetsInfo,setTweetsInfo ] = React.useState({});    
    const [repliesInfo,setRepliesInfo ] = React.useState([]);
    const [Name,setName ] = React.useState();
    const [repliesSuccess,setRepliesSuccess ] = React.useState("");
    const [DeletedTweet,setDeletedTweet ] = React.useState(false);

    const [addedReply,setAddedReply ] = React.useState(false);
    function handleDeletedTweet(){
      setDeletedTweet(true);
    };
    function handleAddReply(){
        setAddedReply(true);
      };

    function handleReplyReply()
    {

    }
    function navback()
    {

    }
    let navigate = useNavigate();
    
//momken tet3mel be local storage on click
    function getReply(tweet)
    {

      return(
        <Tweet
        key={tweet.key}
        id={tweet.key}
        name={tweet.name}
        userName={tweet.username}
        content={tweet.replyBody}
        avatar={tweet.image}
        image={tweet.media}
        video=''
        likeCount={tweet.favoritersCount}
        repliesCount={tweet.repliesCount}
        retweetCount={tweet.retweetersCount}
        reply_to_reply={handleReplyReply}
        deleted_flag={handleDeletedTweet}
        bookMarked_flag={tweet.isBookmarkedByUser==="false"?false:true}
        retweeteded_flag={tweet.isRetweetedByUser==="false"?false:true}
        liked_flag={tweet.isLikedByUser==="false"?false:true}
        isReply={tweet.isReply}

        />
    
      )
    }
    

    var token=sessionStorage.getItem("tokenValue");
    var config1 = {
    method: 'get',
    url: 'http://34.236.108.123:3000/home/'+localStorage.getItem("TweetID")+'/getTweetById',
    headers: {Authorization:"Bearer "+token}
    };
      async function GetTweetInfo() {
        let response = '';
        try {
          response = await axios.get('http://34.236.108.123:3000/home/'+localStorage.getItem("TweetID")+'/getTweetById',config1).then((res) => res.data);
          //console.log(response.tweetData);

          setTweetsInfo(response.tweetData);
          setName(response.tweetData.name);
          return (response.tweetData);
        } catch (error) {
          if (error.response) {
            return (error.response);
          }
        }

        return (response);
      }
      React.useEffect(() => {
        (async () => {
          const resp = await GetTweetInfo();
          setTweetsInfo(resp);

        })();
      }, []);


      var config2 = {
        method: 'get',
        url: 'http://34.236.108.123:3000/home/'+localStorage.getItem("TweetID")+'/getReplies',
        headers: {Authorization:"Bearer "+token}
        };
          async function GetRepliesInfo() {
            let response = '';
            try {
              response = await axios.get('http://34.236.108.123:3000/home/'+localStorage.getItem("TweetID")+'/getReplies',config2).then((res) => res.data);
              //console.log(response.tweetData);
    
              setRepliesInfo(response.Replies);
              console.log(response.Replies);
              setRepliesSuccess(response.message);

              return (response.Replies);
            } catch (error) {
              if (error.response) {
                return (error.response);
              }
            }
    
            return (response);
          }
          React.useEffect(() => {
            (async () => {
              const resp = await GetRepliesInfo();
              setRepliesInfo(resp);    
            })();
          }, []);

          if (addedReply===true)
          {
            (async () => {
              const resp = await GetRepliesInfo();
              setRepliesInfo(resp);
              setAddedReply(false);
              //console.log(resp);
            })();  }
        
            if (DeletedTweet===true)
            {
              (async () => {
                const resp = await GetRepliesInfo();
                setRepliesInfo(resp);
                setDeletedTweet(false);
                //console.log(resp);
              })();  }

              function handleBack()
              {
                navigate(-1);
                navback();
                
              }

      if(Name)
      {
        return(
          <div>
              <div className="header">
                  <div className="ArrowIcon">
                  
                      <ArrowBackIcon onClick={handleBack} fontSize="small" />   
                  
                  </div>
              <h2>Thread</h2>
              </div>
              <Tweet
                id={localStorage.getItem("TweetID")}
                name={tweetsInfo.name}
                userName={tweetsInfo.username}
                content={tweetsInfo.tweetBody}
                avatar={tweetsInfo.userImage}
                image={[tweetsInfo.tweetMedia]}
                video=''
                likeCount={tweetsInfo.favoritersCount}
                repliesCount={tweetsInfo.repliesCount}
                retweetCount={tweetsInfo.retweetersCount}
                bookMarked_flag={tweetsInfo.isBookmarkedByUser}
                retweeteded_flag={tweetsInfo.isRetweetedByUser==="false"?false:true}
                liked_flag={tweetsInfo.isLikedByUser==="false"?false:true}
                isReply={tweetsInfo.isReply}
                isPoll={tweetsInfo.poll}

              />
              <div className="TweetStats">
                <div className={"TweetStats_retweeters"}><div style={{"width":"20px"}}>{tweetsInfo.retweetersCount}</div><div style={{"color":"grey"}}>Retweets</div></div>
                <div className={"TweetStats_likers"}><div style={{"width":"20px"}}>{tweetsInfo.favoritersCount}</div> <div style={{"color":"grey"}}>Likes</div></div>
              </div>
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
              flag_stop_working_from_poll_to_schedule={props.flag_stop_working_from_poll_to_schedule} flag={props.flag} 
              postingFlag={handleAddReply}
              flag_reply={true}
              tweet_id={localStorage.getItem("TweetID")}
              />
            {repliesSuccess==="Success" ?
            <div>
            {repliesInfo.map(getReply)}
            </div>
            :
            <div>
                <Puff 
                  color="#00BFFF" 
                  height={100} 
                  width={100} 
                  ariaLabel='loading'
                />
              </div>
            }
          </div>
          
  
      );
      }
      else
      {
        return (
          <div>
          <Puff 
            color="#00BFFF" 
            height={500} 
            width={500} 
            ariaLabel='loading'
          />
          </div>
        );
      }
    
}

export default TweetPageData

