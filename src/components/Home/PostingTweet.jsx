import React from "react";
import "./index.css";
import ProfilePicture from './constants/ProfilePicture';
import Inputtext from "./constants/Inputtext"
import Heading from "./constants/Heading"
import IconMedia from "./Icons/media/IconMedia"
import IconPoll from "./Icons/poll/IconPoll"
import IconGif from "./Icons/gif/IconGif"
import IconSchedule from "./Icons/schedule/IconSchedule"
import IconHappyFace from "./Icons/emoji/IconHappyFace"
import Schedule from "./images/schedule.png"
import Media from"./images/media.png"
import poll from"./images/poll.png"
import Happyface from "./images/happyface.png"
import  Gif from"./images/gif.png"
import Poll from "./Icons/poll/Poll"


function PostingTweet(props) {
  return (
    <div id="posting_a_tweet" style={{"height":"auto"}}>
       <Heading></Heading>

       <div className="profile_picture">
          <ProfilePicture classname="ProfilePicture"></ProfilePicture>
          <Inputtext msg="what's happening?" classname={"TweetButton"} flag2={props.flag}/>
          {props.flag===0 ? <Poll flag={1}/>: <Poll flag={0}/> }
       </div>
    { (props.flag===1)  && 
    <div className="icons">
          <IconMedia img={Media} classname={"Media"}/>
          <IconPoll img={poll} classname={"Poll"}/>
          <IconGif img={Gif} classname={"Gif"}/>
          <IconSchedule img={Schedule} classname={"Schedule"}/>
          <IconHappyFace img={Happyface} classname={"Happyface"}/>
    </div> }

    </div>   );
}
export default PostingTweet;
