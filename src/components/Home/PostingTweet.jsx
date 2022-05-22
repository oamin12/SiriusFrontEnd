import React from "react";
import "./index.css"
import { Avatar}from "@mui/material";
import Inputtext from "./constants/Inputtext"

/**
 *
 * @param {object} flags
 * @description Component that contains the are dedicated for writing tweets. It contains a bar for tweeting options ex(Schedule, emojis, gallery)
 *
 * @returns {div} A div that contains this component
 */
function PostingTweet(props) {
  return (
    <div id="posting_a_tweet" style={{"height":"auto"}}>

       <div className="profile_picture">
          <Avatar className="ProfilePicture"  sx={{ width: 48, height: 48 }}/>
          <Inputtext msg={props.flag_reply===true?"Tweet your Reply":"What's Happening"}
            flag_confirm={props.flag_confirm}
            flag_tweetpopuppage={0}
            postingFlag={props.postingFlag}
            classname_media={"Media"}
            classname_emoji={props.flag_reply!==true?"emoji":"emoji_in_reply"}
            flag_reply={props.flag_reply}
            tweet_id={props.tweet_id}
            />
       </div>

    </div>   );
}
export default PostingTweet;
