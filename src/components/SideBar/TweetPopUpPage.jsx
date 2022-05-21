import { tweet_popup_page } from "./tweet_inlinestyling";
import { save_discard_popup_page } from "./tweet_inlinestyling";
import React from "react";
import { unsenttweet_button } from "./tweet_inlinestyling";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import Button from "@mui/material/Button";
import Inputtext from "../Home/constants/Inputtext";
import { Avatar } from "@mui/material";
import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import { saveButton } from "./tweet_inlinestyling";
import { discardButton } from "./tweet_inlinestyling";
import { heading1_savediscard_popuppage } from "./tweet_inlinestyling";
import { heading2_savediscard_popuppage } from "./tweet_inlinestyling";
import axios from "axios";
import Tweet from "../Tweet/Tweet.jsx";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import IconSchedule from "../Home/Icons/schedule/IconSchedule";
function getTweet(tweet) {
  return (
    <Tweet
      key={tweet.key}
      id={tweet.key}
      name={tweet.name}
      userName={tweet.username}
      content={tweet.tweetBody}
      avatar={tweet.userImage}
      image={tweet.tweetMedia}
      video=""
      likeCount={tweet.favoritersCount}
      repliesCount={tweet.repliesCount}
      retweetCount={tweet.retweetersCount}
      bookMarked_flag={false}
    />
  );
}

function TweetPopUpPage(props) {
  var token = sessionStorage.getItem("tokenValue");
  const [tweetsInfo, setTweetsInfo] = React.useState([]);
  const [addedTweet, setAddedTweet] = React.useState(false);
  //console.log('dah el token ',localStorage.getItem("tokenValue"));
  var config = {
    method: "get",
    url: "http://34.236.108.123:3000/home/",

    headers: { Authorization: "Bearer " + token },
  };
  async function GetTweetInfo() {
    let response = "";
    try {
      response = await axios
        .get("http://34.236.108.123:3000/home/", config)
        .then((res) => res.data);
      //console.log('herererer',response.userName);
      localStorage.setItem("UserName", response.userName);
      localStorage.setItem("Name", response.name);
      setTweetsInfo(response.data);
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
    return response;
  }

  function handleAddTweet() {
    setAddedTweet(true);
  }

  React.useEffect(() => {
    (async () => {
      const resp = await GetTweetInfo();
      setTweetsInfo(resp);
    })();
  }, []);

  if (addedTweet === true) {
    (async () => {
      const resp = await GetTweetInfo();
      setTweetsInfo(resp);
      setAddedTweet(false);
      //console.log(resp);
    })();
  }
  // ---------------------------

  //  const [Open, setOpen] = React.useState(false); //open main popup page of the tweet
  const [Open_savediscard, setOpen_savediscard] = React.useState(false); //open the small pop up page
  const [OpenDraftsflag, setOpenDraftsflag] = React.useState(false);
  const [FlagToOpenDraftsFromTweetButton, set_FlagToOpenDraftsFromTweetButton] =
    React.useState(false);
  const [textPassedToTheTweetbutton, settextPassedToTheTweetbutton] =
    React.useState(false); //this is used to be passed to the input text to know if there is a text before poping up the page of the save discard

  function closeTweets_page() {
    //oncloseing the main popuppage the save discard popup page appear on condition that there is text
    if (textPassedToTheTweetbutton === true) {
      setOpen_savediscard(true);
      //hena mynf3sh el text tb2a false hy3mel moshkla lw aflt el savediscard page w b3d kda dost cancel tany
    } else {
      props.setOpen(false);
    }
  }
  function closeAllPagesDiscard() {
    //onclick on save or discard button te two popup pages will bu closed
    setOpen_savediscard(false);
    props.setOpen(false);
    if (OpenDraftsflag === true) {
      set_FlagToOpenDraftsFromTweetButton(true);
      setOpenDraftsflag(false);
    } else {
      props.setOpen(false);
    }
    settextPassedToTheTweetbutton(false);
  }
  function closeAllPagesSave() {
    //save the text in the backend
    //onclick on save or discard button te two popup pages will bu closed
    setOpen_savediscard(false);

    //hena btcheck ana fthet el save discard mn zorar close el tweet pop up page wla lma dost 3la unsent tweets
    if (OpenDraftsflag === true) {
      set_FlagToOpenDraftsFromTweetButton(true);
      setOpenDraftsflag(false);
    } else {
      props.setOpen(false);
    }
    // settextPassedToTheTweetbutton(false)
  }
  function closesave_discard_page() {
    //if we closed the small popup page the main popup page will not be closed
    setOpen_savediscard(false);

    //hena btcheck ana fthet el save discard mn zorar close el tweet pop up page wla lma dost 3la unsent tweets
  }
  function goToDrafts() {
    //kol el drafts bt3melo btfth page save discard w kol save aw discard function hnfth el drafts
    if (textPassedToTheTweetbutton === true) {
      setOpen_savediscard(true);
      setOpenDraftsflag(true);
    } else {
      set_FlagToOpenDraftsFromTweetButton(true);
    }
    settextPassedToTheTweetbutton(false);
  }
  return (
    <div>
      <Dialog
        open={props.Open}
        onClose={closeTweets_page}
        sx={tweet_popup_page}
      >
        <DialogContent>
          <DialogActions>
            <CloseTwoToneIcon
              data-testid="close-button"
              onClick={closeTweets_page}
            />
            {/* not appear until ther is drafts, this will be checked from the data the backend will give me */}
            <Button sx={unsenttweet_button} onClick={goToDrafts}>
              {" "}
              unsent tweets
            </Button>
          </DialogActions>
          <Avatar className="ProfilePicture" sx={{ width: 48, height: 48 }} />
          <Inputtext
            msg="what's happening?"
            postingFlag={handleAddTweet}
            flag_tweetpopuppage={1}
            classname={"TweetButton_tweet_popuppage"}
            flag2_toschedule={1}
            flag_confirm={0}
            classname_media={"Media"}
            classname_emoji={"emoji"}
            settextPassedToTheTweetbutton={settextPassedToTheTweetbutton}
          />
          <Modal open={Open_savediscard} onClose={closesave_discard_page}>
            <Box sx={save_discard_popup_page}>
              <h3 style={heading1_savediscard_popuppage}>Save Tweet?</h3>
              <h4 style={heading2_savediscard_popuppage}>
                You can save this to send later from your unsent Tweets.
              </h4>
              <Button sx={saveButton} onClick={closeAllPagesSave}>
                Save
              </Button>
              <Button sx={discardButton} onClick={closeAllPagesDiscard}>
                Discard
              </Button>
            </Box>
          </Modal>
        </DialogContent>
      </Dialog>
      {FlagToOpenDraftsFromTweetButton === true && (
        <IconSchedule
          set_
          set_FlagToOpenDraftsFromTweetButton={
            set_FlagToOpenDraftsFromTweetButton
          }
          FlagToOpenDraftsFromTweetButton={true}
        />
      )}
    </div>
  );
}
export default TweetPopUpPage;
