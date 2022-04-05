import { Avatar } from "@mui/material";
import React, {useState} from "react";
import "./Tweet.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import RepeatIcon from '@mui/icons-material/Repeat';
import { NavLink } from "react-router-dom";


function Tweet({avatar, name, userName, timeStamp, content, image, video, likeCount, repliesCount, retweetCount })
{
    const [liked, setLiked]= useState(false);
    const [retweeted, setRetweeted]= useState(false);
    const [bookMarked, setBookMarked]= useState(false);
    const [likesCount,changeLikesCount] = useState(likeCount);
    const [replieCount,changeRepliesCount] = useState(repliesCount);
    const [retweetsCount,changeRetweetsCount] = useState(retweetCount);
    const [hoverOverReply, setHoverReply] = useState(false);
    const [hoverOverRetweet, setHoverRetweet] = useState(false);
    const [hoverOverBookMark, setHoverBookMark] = useState(false);
    const [hoverOverLike, setHoverLike] = useState(false);
    const [hoverOverTweet, setHoverTweet] = useState(false);

    //const numOfPics= image
    //////////////////////
    function isOverReply()
    {
      setHoverReply(true);
    }
    function isOutReply()
    {
      setHoverReply(false);
    }
    //////////////////////
    function isOverBookMark()
    {
      setHoverBookMark(true);
    }
    function isOutBookMark()
    {
      setHoverBookMark(false);
    }
    //////////////////////
    function isOverRetweet()
    {
      setHoverRetweet(true);
    }
    function isOutRetweet()
    {
      setHoverRetweet(false);
    }
    //////////////////////
    function isOverLike()
    {
      setHoverLike(true);
    }
    function isOutLike()
    {
      setHoverLike(false);
    }
    //////////////////////
    //////////////////////
    function isOverTweet()
    {
      setHoverTweet(true);
    }
    function isOutTweet()
    {
      setHoverTweet(false);
    }
    //////////////////////
    function handleBookmark()
    {
      setBookMarked(!bookMarked);
    }
    function handleLike(event)
    {
        setLiked(!liked);

        if(!liked){
          changeLikesCount(likesCount+1)
        }
        else{changeLikesCount(likesCount-1)}
    }
    function handleRetweet()
    {
      setRetweeted(!retweeted)
      if(!retweeted){
        changeRetweetsCount(retweetsCount+1)
      }
      else{changeRetweetsCount(retweetsCount-1)}

    }
    function handleReply()
    {

    }


    return(
        <div className="post_body"
        onMouseOver={isOverTweet}
        onMouseOut={isOutTweet}
         >
          <div className="post_header" >
            <div className="post_headerText">
            <NavLink className="link_text" to="/profile"><Avatar src={avatar} sx={{ width: 48, height: 48 }}/></NavLink>
              <h3 className="userdata">
              <NavLink className="link_text" to="/profile">{name}</NavLink>{" "}
                <span className="post_headerUserName">
                  @
                  <NavLink className="link_text2" to="/profile">{userName}</NavLink>
                </span>
              </h3>

            </div>
            <div className="post_headerDescription" style={{opacity: hoverOverTweet? "200%": "100%"}}>
            {/* TODO: check opacity */}

              <p className="content_style">{content}</p>
            </div>
          </div>

          {image?<img src={image} alt=""/>:null }
          {video?<video src={video} alt=""/>:null }

          <div className="post_footer" style={{opacity: hoverOverTweet? "100%": "100%"}}>
          <span className="buttons_style">
          {/*REPLY BUTTON*/}
          <IconButton
          onMouseOver={isOverReply}
          onMouseOut={isOutReply}
          style={{color: hoverOverReply? "#1DA1F2":"gray", backGroundColor: hoverOverReply? "blue":"gray"}}
          onClick={handleReply}
          sx={{ width:0.1, height: 0.1 }}>
          <ModeCommentOutlinedIcon />
          </IconButton>
          {repliesCount}
          {/*RETWEET BUTTON*/}
          <IconButton
          onMouseOver={isOverRetweet} onMouseOut={isOutRetweet}
          style={{color: retweeted||hoverOverRetweet? "green":"gray"}}
          onClick={handleRetweet}
          sx={{ width:0.1, height: 0.1 }}>
            <RepeatIcon fontSize="small" />
            </IconButton>
            {retweetsCount}
            {/*LIKE BUTTON*/}
            <IconButton
            onMouseOver={isOverLike} onMouseOut={isOutLike}
            style={{color: liked||hoverOverLike ? "red" : "gray" }}
            onClick={handleLike}
            sx={{ width:0.1, height: 0.1 }}>
            {liked? <FavoriteIcon />:<FavoriteBorderIcon /> }
            </IconButton>
            {likesCount}
            {/*BOOKMARK BUTTON*/}
            <IconButton
            onMouseOver={isOverBookMark} onMouseOut={isOutBookMark}
            style={{color: hoverOverBookMark||bookMarked? "#1DA1F2":"gray"}}
            onClick={handleBookmark}
             sx={{ width:0.1, height: 0.1 }}>
             {bookMarked? <BookmarkIcon/>:<BookmarkBorderOutlinedIcon/>}
            </IconButton>
          </span>
          </div>
        </div>

);


}




// <div className="post" ref={ref}>
//         <div className="post__avatar">
//           <Avatar src={avatar} />
//         </div>
//         <div className="post__body">
//           <div className="post__header">
//             <div className="post__headerText">
//               <h3>
//                 {displayName}{" "}
//                 <span className="post__headerSpecial">
//                   {verified && <VerifiedUserIcon className="post__badge" />} @
//                   {username}
//                 </span>
//               </h3>
//             </div>
//             <div className="post__headerDescription">
//               <p>{text}</p>
//             </div>
//           </div>
//           <img src={image} alt="" />
//           <div className="post__footer">
//             <ChatBubbleOutlineIcon fontSize="small" />
//             <RepeatIcon fontSize="small" />
//             <FavoriteBorderIcon fontSize="small" />
//             <PublishIcon fontSize="small" />
//           </div>
//         </div>
//       </div>


//<div className="tweet">
  //          <div className="user_data">
   //         <Avatar alt="o" src=""  sx={{width: 48,height: 48 }}/>
     //       </div>
      //      <div className= "tweetbody">  {/*Body*/}
        //    <div className="tweettxt"> {/* headertxt */}
          //   <h3>
          //      {name}{" "}
           //     <span className="post__headerSpecial">
            //     @
             //    {userName}
              //  </span>
           // </h3>

       // </div>
   // </div>


// </div>


export default Tweet
