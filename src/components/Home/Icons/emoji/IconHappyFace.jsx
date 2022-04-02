import React from "react";
import ProfilePicture from '../../constants/ProfilePicture';
import Inputtext from "../../constants/Inputtext"
import Heading from "../../constants/Heading"
import IconMedia from "../media/IconMedia"
import IconPoll from "../poll/IconPoll"
import IconGif from "../gif/IconGif"
import IconSchedule from "../schedule/IconSchedule"
import IconHappyFace from "./IconHappyFace"
import Schedule from "../../images/schedule.png"
import Media from"../../images/media.png"
import poll from"../../images/poll.png"
import Happyface from "../../images/happyface.png"
import  Gif from "../../images/gif.png"
import Emoji from "./emojikeyboard";
function IconHappyface(props)
{
  function handlechange()
  {
    return (<div id="posting_a_tweet">
           <Heading></Heading>
            <div className="profile_picture">
            <ProfilePicture></ProfilePicture>
            <Inputtext msg="what's happening" flag={1} ></Inputtext>
            </div>
            <div className="icons">
            <IconMedia img={Media} classname={"Media"}/>
            <IconPoll img={poll} classname={"Poll"}/>
            <IconGif img={Gif} classname={"Gif"}/>
            <IconSchedule img={Schedule} classname={"Schedule"}/>
            <IconHappyFace img={Happyface} classname={"Happyface"}/>
            <Emoji/>
           </div>

          </div>)
  }
    return(
  <div  >
    <input type="image" className={props.classname}
      src={props.img} alt=""
      onClick={handlechange}/>
 </div>);
}
export default IconHappyface
