import React from "react";
import "./index.css"
import { Avatar}from "@mui/material";
import Inputtext from "./constants/Inputtext"
import Media from"./images/media.png"
import Happyface from "./images/happyface.png"
import Poll from "./Icons/poll/Poll"

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
          <Inputtext msg="what's happening?"
            weekdayName={props.weekdayName}
            month={props.month}
            date={props.date}
            year={props.year_toset_theyear_value}
            time={props.time}
            minutes={props.minutes}
            hours={props.hours} 
            am_pm={props.am_pm} 
            flag_confirm={props.flag_confirm}
            classname={"TweetButton"} flag2={props.flag} postingFlag={props.postingFlag} img_media={Media} img={Happyface} classname_media={"Media"} classname_emoji={"emoji"}/>
            {props.flag===0 ? <Poll flag={1}/>: <Poll flag={0}/> }
       </div>

    </div>   );
}
export default PostingTweet;