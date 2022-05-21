import { Avatar } from "@mui/material";
import ReactDOM from "react-dom";
import App from "../App";
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
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import axios from "axios";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { LeafPoll, Result } from 'react-leaf-polls'
import 'react-leaf-polls/dist/index.css'
import { WrapText } from "@mui/icons-material";
var token=sessionStorage.getItem("tokenValue");
const resData = [
  { id: 0, text: 'Answer 1', votes: 0 },
  { id: 1, text: 'Answer 2', votes: 0 },
  { id: 2, text: 'Answer 3', votes: 0 }
]
const customTheme = {
  textColor: 'black',
  mainColor: '#1d9bf0',
  backgroundColor: 'rgb(255,255,255)',
  alignment: 'center',
  width: "10px",
  height:"10px"

}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "0px",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};
function Tweet({ id,avatar, name, userName, timeStamp, content, image, video, likeCount, repliesCount, retweetCount, bookMarked_flag,liked_flag,retweeteded_flag,deleted_flag,handleReplyReply,isPoll,isReply }) {
  const [liked, setLiked] = useState(liked_flag);
  const [retweeted, setRetweeted] = useState(retweeteded_flag);
  const [bookMarked, setBookMarked] = useState(bookMarked_flag);

  const [likesCount, changeLikesCount] = useState(likeCount);
  const [replieCount, changeRepliesCount] = useState(repliesCount);
  const [retweetsCount, changeRetweetsCount] = useState(retweetCount);
  const [hoverOverReply, setHoverReply] = useState(false);
  const [hoverOverRetweet, setHoverRetweet] = useState(false);
  const [hoverOverBookMark, setHoverBookMark] = useState(false);
  const [hoverOverLike, setHoverLike] = useState(false);
  const [hoverOverTweet, setHoverTweet] = useState(false);
  const [UserProfile, setUserProfile] = useState(userName);

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
  ///////-POLL DATA-///////////////
  function vote(item: Result, results: Result[]) {
    // Here you probably want to manage
    // and return the modified data to the server.
  }
  ///////////////////////
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

  async function PostLike() {
    let response = '';
    try {
      response = await axios.post('http://34.236.108.123:3000/home/'+id+'/likeTweet',{},{ headers: { Authorization: "Bearer " + token }}).then((res) => res.data);
      return (response);
    } catch (error) {
      if (error.response) {
        return (error.response);
      }
    }
    console.log(response);
    return (response);
  }
  async function PostRetweet() {
    let response = '';
    try {
      response = await axios.post('http://34.236.108.123:3000/home/'+id+'/retweet',{},{ headers: { Authorization: "Bearer " + token }}).then((res) => res.data);
      return (response);
    } catch (error) {
      if (error.response) {
        return (error.response);
      }
    }
    console.log(response);
    return (response);
  }

  async function PostBookmark() {
    let response = '';
    try {
      response = await axios.post('http://34.236.108.123:3000/home/'+id+'/bookmarkTweet',{},{ headers: { Authorization: "Bearer " + token }}).then((res) => res.data);
      return (response);
    } catch (error) {
      if (error.response) {
        return (error.response);
      }
    }
    console.log(response);
    return (response);
  }


  var config = {
    method: 'get',
    url: 'http://34.236.108.123:3000/home/'+id+'/deleteTweet',
    headers: {Authorization:"Bearer "+token}
  };
  async function DeleteTweet() {
    let response = '';
    try {
      response = await axios.delete('http://34.236.108.123:3000/home/'+id+'/deleteTweet',config).then((res) => res.data);
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

  function HandleDeleteBookmark() {
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

  const [openModal, setOpenModal] = React.useState(false);
  function handleDeleteButtonClick() {
    setOpenModal(true);
  }
  function handleModalClose() {
    setOpenModal(false);
  }

  function handleCancelButtonClick() {
    handleModalClose();
    handleClose();
  }
  ////////////////////////
  function handleBookmark() {
    setBookMarked(!bookMarked);
    PostBookmark();
    // if(!bookMarked)
    // {

    // }
    // else
    // {
    //   HandleDeleteBookmark();
    // }
  }
  function handleLike(event) {
    setLiked(!liked);
    PostLike();
    if (!liked) {
      changeLikesCount(likesCount + 1)
    }
    else { changeLikesCount(likesCount - 1) }


  }
  function handleRetweet() {
    setRetweeted(!retweeted)
    PostRetweet();
    if (!retweeted) {
      changeRetweetsCount(retweetsCount + 1)
    }
    else { changeRetweetsCount(retweetsCount - 1) }

  }
  function handleReply() {
    localStorage.setItem("TweetID",id);
    handleReplyReply();

  }
  const [open, setOpen] = useState(null);

  function handleSettings(event) {
    setOpen(event.currentTarget);

  }

  function handleClose() {
    setOpen(null);

  }
  function handleDeleteTweet()
  {
    DeleteTweet();
    deleted_flag();
    handleReplyReply();
  }

  function handleUserClicked(){
    //ReactDOM.render(<App flag_stop_working_from_poll_to_schedule={0}  flag={1}/>, document.getElementById("root"));
    console.log('in tweet click',userName);
    localStorage.setItem("UserProfile",userName);
    console.log("USERPROFILEDADAWDWDAD", localStorage.getItem("UserProfile"));
  }

  //localStorage.setItem("UserProfile",userName); TODO
  var lol=2;
  return (
    <div className="post_body"
      onMouseOver={isOverTweet}
      onMouseOut={isOutTweet}
    >
      <div className="post_header" >
        <div className="post_headerText">
          <NavLink className="link_text" to={"/"+userName} onClick={handleUserClicked}><Avatar src={avatar} sx={{ width: 48, height: 48 }} /></NavLink>
          <h3 className="userdata">
            <div>
              <NavLink  className="link_text" to={"/"+userName} onClick={handleUserClicked}>{name}</NavLink>{" "}
              <span className="post_headerUserName">
                @
                <NavLink className="link_text2" to={"/"+userName} onClick={handleUserClicked} >{userName}</NavLink>
              </span>
            </div>
            {/*Button Button Button Button Button Button Button*/}
            <div className="tweet_settings">
              <IconButton sx={{ width: 0.15, height: 1 }} onClick={handleSettings} >
                <MoreHorizIcon data-testid="More-Tweet"/>
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
            {userName===localStorage.getItem("UserName")?
            <div>
                <Typography  sx={{ p: 2 }} className="tweet_settings_bar">
                  <div onClick={handleDeleteButtonClick} style={{color:"red"}}><DeleteOutlinedIcon fontSize="small"/> Delete</div>
                    <Modal open={openModal} onClose={handleModalClose}>
                      <Box sx={style}>
                        <h3 className="modalHeader">Delete Tweet?</h3>
                        <p className="boxParagraph">
                        This can't be undone and it will be removed from your profile,
                        the timeline of any accounts that follow you, and from Twitter search results.
                        </p>

                        <button data-testid="clear-button" className="clearLink" onClick={handleDeleteTweet}>
                          Delete
                        </button>
                        <button  className="cancelButton" onClick={handleCancelButtonClick}>
                          Cancel
                        </button>
                      </Box>
                   </Modal>
                </Typography>
                <Typography sx={{ p: 2 }} className="tweet_settings_bar">
                  <PushPinOutlinedIcon fontSize="small"/> Pin
                </Typography>
              </div>
            :
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
              </div>}
            </Popover>
          </div>

        </div>
        {/***********************************************************************************************************************/}
        {/***********************************************************************************************************************/}
        {/***********************************************************************************************************************/}
        {/***********************************************************************************************************************/}



          {(isPoll==="true" || !isReply)?<div className="post_headerDescription" style={{ opacity: hoverOverTweet ? "200%" : "100%" }}>
          <p className="content_style">{content}</p></div>:
          <div className="Poll"><LeafPoll
              type='multiple'
              question='What you wanna ask?'
              results={resData}
              theme={customTheme}
              onVote={vote}
              isVoted={false}
            /></div>
          }

      </div>

      {/* {image ? <img src={image.med1} alt="" /> : null} */}

      {image.length===1? <div className="post_body1"><img src={image[0]} alt="" /></div>:
      image.length===2? <div className="post_body2">
      <img style={{"border-top-left-radius":"20px", "border-bottom-left-radius":"20px"}} src={image[0]} alt="" />
      <img style={{"border-top-right-radius":"20px", "border-bottom-right-radius":"20px"}} src={image[1]} alt="" /></div>:
      image.length===3?<div className="post_body3">
        <div className="post_body3_1">
        <img style={{"border-top-left-radius":"20px", "border-bottom-left-radius":"20px"}} src={image[0]} alt="" />
        </div>
        <div className="post_body3_2">
        <img style={{"border-top-right-radius":"20px"}} src={image[1]} alt="" />
        <img style={{ "border-bottom-right-radius":"20px"}} src={image[2]} alt="" />
        </div>
      </div> :
      image.length===4?
      <div className="post_body4">
      <div className="post_body4_1">
      <img style={{"border-top-left-radius":"20px"}} src={image[0]} alt="" />
      <img style={{"border-bottom-left-radius":"20px"}} src={image[1]} alt="" />
      </div>
      <div className="post_body4_2">
      <img style={{"border-top-right-radius":"20px"}} src={image[2]} alt="" />
      <img style={{ "border-bottom-right-radius":"20px"}} src={image[3]} alt="" />
      </div>
      </div>
      :null}

      {video ? <video src={video} alt="" /> : null}

      <div className="post_footer" style={{ opacity: hoverOverTweet ? "100%" : "100%" }}>
        <span className="buttons_style">
          {/*REPLY BUTTON*/}
          <NavLink to={"/"+userName+"/status/"+id} onClick={handleReply}>
          <IconButton
            onMouseOver={isOverReply}
            onMouseOut={isOutReply}
            style={{ color: hoverOverReply ? "#1DA1F2" : "gray", backGroundColor: hoverOverReply ? "blue" : "gray" }}
            sx={{ width: 0.08, height: 1 }}>
            <ModeCommentOutlinedIcon />
          </IconButton>
          </NavLink>
          {replieCount}
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
