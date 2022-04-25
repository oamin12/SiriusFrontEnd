import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./Tweet.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import RepeatIcon from '@mui/icons-material/Repeat';
import { NavLink } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./TweetHeader.css"
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import BlockIcon from '@mui/icons-material/Block';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import VolumeOffOutlinedIcon from '@mui/icons-material/VolumeOffOutlined';
import axios from "axios";



function Tweet({ id,avatar, name, userName, timeStamp, content, image, video, likeCount, repliesCount, retweetCount, bookMarked_flag,liked_flag,retweeteded_flag }) {
  const [liked, setLiked] = useState(false);
  const [retweeted, setRetweeted] = useState(false);
  const [bookMarked, setBookMarked] = useState(bookMarked_flag);

  const [likesCount, changeLikesCount] = useState(likeCount);
  const [replieCount, changeRepliesCount] = useState(repliesCount);
  const [retweetsCount, changeRetweetsCount] = useState(retweetCount);
  const [hoverOverReply, setHoverReply] = useState(false);
  const [hoverOverRetweet, setHoverRetweet] = useState(false);
  const [hoverOverBookMark, setHoverBookMark] = useState(false);
  const [hoverOverLike, setHoverLike] = useState(false);
  const [hoverOverTweet, setHoverTweet] = useState(false);

  //const numOfPics= image
  //////////////////////
  function isOverReply() {
    setHoverReply(true);
  }
  function isOutReply() {
    setHoverReply(false);
  }
  //////////////////////
  function isOverBookMark() {
    setHoverBookMark(true);
  }
  function isOutBookMark() {
    setHoverBookMark(false);
  }
  //////////////////////
  function isOverRetweet() {
    setHoverRetweet(true);
  }
  function isOutRetweet() {
    setHoverRetweet(false);
  }
  //////////////////////
  function isOverLike() {
    setHoverLike(true);
  }
  function isOutLike() {
    setHoverLike(false);
  }
  //////////////////////
  async function PostTweet() {
    let response = '';
    try {
      response = await axios.post('http://localhost:3001/Bookmarks/',{"id":id,"name":name,"userName":userName,"content":content,"avatar":avatar,"image":image,"likeCount":likeCount,"repliesCount":repliesCount,"retweetCount":retweetCount}).then((res) => res.data);
      return (response);
    } catch (error) {
      if (error.response) {
        return (error.response);
      }
    }
    console.log(response);
    return (response);
  }
  //////////////////////

  function HandleDeleteAllBookmarks() {
      // post request
      (async () => {
          await axios.delete(
            "http://localhost:3001/Bookmarks/" + id
          );
      })();

    }


  function isOverTweet() {
    setHoverTweet(true);
  }
  function isOutTweet() {
    setHoverTweet(false);
  }
  //////////////////////

  function handleBookmark() {
    setBookMarked(!bookMarked);
    
    if(!bookMarked)
    {
      PostTweet();
    }
    else
    {
      HandleDeleteAllBookmarks();
    }
  }
  function handleLike(event) {
    setLiked(!liked);
    if (!liked) {
      changeLikesCount(likesCount + 1)
    }
    else { changeLikesCount(likesCount - 1) }
  }
  function handleRetweet() {
    setRetweeted(!retweeted)
    if (!retweeted) {
      changeRetweetsCount(retweetsCount + 1)
    }
    else { changeRetweetsCount(retweetsCount - 1) }

  }
  function handleReply() {

  }
  const [open, setOpen] = useState(null);

  function handleSettings(event) {
    setOpen(event.currentTarget);
    
  }

  function handleClose() {
    setOpen(null);
    
  }
  var lol=1;
  return (
    <div className="post_body"
      onMouseOver={isOverTweet}
      onMouseOut={isOutTweet}
    >
      <div className="post_header" >
        <div className="post_headerText">
          <NavLink className="link_text" to="/profile"><Avatar src={avatar} sx={{ width: 48, height: 48 }} /></NavLink>
          <h3 className="userdata">
            <div>
              <NavLink className="link_text" to="/profile">{name}</NavLink>{" "}
              <span className="post_headerUserName">
                @
                <NavLink className="link_text2" to="/profile">{userName}</NavLink>
              </span>
            </div>
            {/*Button Button Button Button Button Button Button*/}
            <div className="tweet_settings">
              <IconButton sx={{ width: 0.15, height: 1 }} onClick={handleSettings} >
                <MoreHorizIcon />
              </IconButton>
            </div>
          </h3>
          {/***********************************************************************************************************************/}
          {/***********************************************************************************************************************/}
          {/***********************************************************************************************************************/}

          <div className="Popover_tweet">
            <Popover
              open={Boolean(open)}
              anchorEl={open}
              onClose={handleClose}
              anchorReference="anchorEl"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              style={{
                width: "300px",
                height: "auto",
              }}
            >
              <div>
                <Typography sx={{ p: 2 }} className="tweet_settings_bar">
                  <PersonAddOutlinedIcon fontSize="small"/> Follow @{userName}
                </Typography>
                <Typography sx={{ p: 2 }} className="tweet_settings_bar">
                  <BlockIcon fontSize="small"/> Block @{userName}
                </Typography>
                <Typography sx={{ p: 2 }} className="tweet_settings_bar">
                  <FlagOutlinedIcon fontSize="small"/> Report Tweet
                </Typography>
                <Typography sx={{ p: 2 }} className="tweet_settings_bar">
                  <VolumeOffOutlinedIcon fontSize="small"/> Mute @{userName}
                </Typography>
              </div>
            </Popover>
          </div>

        </div>
        {/***********************************************************************************************************************/}
        {/***********************************************************************************************************************/}
        {/***********************************************************************************************************************/}
        {/***********************************************************************************************************************/}

        <div className="post_headerDescription" style={{ opacity: hoverOverTweet ? "200%" : "100%" }}>
          {/* TODO: check opacity */}

          <p className="content_style">{content}</p>
        </div>
      </div>
      
      {/* {image ? <img src={image.med1} alt="" /> : null} */}
      
      {image.length===1? <div className="post_body1"><img id="lolxd" src={image[0]} alt="" /></div>:
      image.length===2? <div className="post_body2"><img id="lolxd" style={{"border-top-left-radius":"20px", "border-bottom-left-radius":"20px"}} src={image.med1} alt="" />
      <img id="lolxd" style={{"border-top-right-radius":"20px", "border-bottom-right-radius":"20px"}} src={image.med2} alt="" /></div>:null} 
      
      
      {video ? <video src={video} alt="" /> : null}

      <div className="post_footer" style={{ opacity: hoverOverTweet ? "100%" : "100%" }}>
        <span className="buttons_style">
          {/*REPLY BUTTON*/}
          <IconButton
            onMouseOver={isOverReply}
            onMouseOut={isOutReply}
            style={{ color: hoverOverReply ? "#1DA1F2" : "gray", backGroundColor: hoverOverReply ? "blue" : "gray" }}
            onClick={handleReply}
            sx={{ width: 0.08, height: 1 }}>
            <ModeCommentOutlinedIcon />
          </IconButton>
          {repliesCount}
          {/*RETWEET BUTTON*/}
          <IconButton
            onMouseOver={isOverRetweet} onMouseOut={isOutRetweet}
            style={{ color: retweeted || hoverOverRetweet ? "green" : "gray" }}
            onClick={handleRetweet}
            sx={{ width: 0.08, height: 1 }}>
            <RepeatIcon fontSize="small" />
          </IconButton>
          {retweetsCount}
          {/*LIKE BUTTON*/}
          <IconButton
            title="LikeButton"
            onMouseOver={isOverLike} onMouseOut={isOutLike}
            style={{ color: liked || hoverOverLike ? "red" : "gray" }}
            onClick={handleLike}
            sx={{ width: 0.08, height: 1 }}>
            {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          {likesCount}
          {/*BOOKMARK BUTTON*/}
          <IconButton
            onMouseOver={isOverBookMark} onMouseOut={isOutBookMark}
            style={{ color: hoverOverBookMark || bookMarked ? "#1DA1F2" : "gray" }}
            onClick={handleBookmark}
            sx={{ width: 0.08, height: 1 }}>
            {bookMarked ? <BookmarkIcon /> : <BookmarkBorderOutlinedIcon />}
          </IconButton>
        </span>
      </div>
    </div>

  );


}




export default Tweet
