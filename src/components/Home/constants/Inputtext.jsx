import React from "react";
import tweets from "../Tweets.js";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import scheduled_tweets from "../Icons/schedule/scheduled_tweets";
import Picker from "emoji-picker-react";
import Popover from "@mui/material/Popover";
import "./inputtext_1img.css";
import { useState } from "react";
import IconGif from "../Icons/gif/IconGif";
import IconSchedule from "../Icons/schedule/IconSchedule";
import Poll from "../Icons/poll/Poll";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import axios from "axios";
import CollectionsIcon from "@mui/icons-material/Collections";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { tweetbutton } from "./inlinestyling_inputetext";
import { tweetbuttonblur } from "./inlinestyling_inputetext";
import { tweetbutton_popuppage } from "./inlinestyling_inputetext";
import { schedulebutton } from "./inlinestyling_inputetext";
import { schedulebutton_popuppage } from "./inlinestyling_inputetext";
import { tweetbutton_popuppageblur } from "./inlinestyling_inputetext";
import { schedulebuttonblur } from "./inlinestyling_inputetext";
import { schedulebutton_popuppageblur } from "./inlinestyling_inputetext";
import { calendericon } from "./inlinestyling_inputetext";
import { calenderstatus } from "./inlinestyling_inputetext";
//import Editor, { createEditorStateWithText } from "@draft-js-plugins/editor";
//import createHashtagPlugin from "@draft-js-plugins/hashtag";

// 1.dlw2ty el user lma hydos schedule fy el input text el data el fy el schedule htroh lel backend

/**
 *
 * @param {object} flags
 * @description Component that contains the area dedicated for writing tweet
 * @returns A div that renders this component
 */
function Inputtext(props) {
  const [savetweets, setsavetweets] = React.useState(false); //3shan a3ref en fy tweets saved f a save el text e fy textarea
  const [anchorEl, setAnchorEl] = React.useState(null);
  let [flag2, setflag2] = React.useState(0);
  let [text, settext] = React.useState("gh");
  // let [schedule_flag,setschedule_flag]=React.useStete(0);
  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  let [image, setImage] = React.useState([""]);
  let [image2, setImage2] = React.useState([""]);
  const [loading, setLoading] = React.useState(false);
  const [flag_img, set_flag_img] = React.useState(false);
  const [flag_stop_working, set_flag_stop_working] = React.useState(0);
  let [counter_for_images, set_counter_for_images] = React.useState(0);
  let [counter_for_images2, set_counter_for_images2] = React.useState(0);
  let [scheduled_tweets, set_scheduled_tweets] = React.useState([
    {
      content: "",
      weekdayName: "",
      month: 0,
      date: 0,
      year: 0,
      time: "",
      am_pm: "",
    },
  ]);

  let [weekdayName, setweekdayName] = React.useState("");
  let [year, setyear] = React.useState(0);
  let [time, settime] = React.useState("");
  let [date, setdate] = React.useState(0);
  let [month, setmonth] = React.useState("");
  let [monthnumber, setmonthnumber] = React.useState(0);
  let [am_pm, setam_pm] = React.useState("");
  let [flag2_toschedule, setflag2_toschedule] = React.useState(1);
  const [scheduledtweetsflag, setscheduledtweetsflag] = React.useState(0);
  const [imgout, setimageout] = React.useState("");

  // const hashtagPlugin = createHashtagPlugin();
  // const plugins = [hashtagPlugin];

  const [editorState, seteditorState] = React.useState(text);

  // let state = {
  //   editorState: createEditorStateWithText(text),
  // };

  function onChange(editorState) {
    seteditorState(editorState);
  }

  // function focus ()  {
  //   this.editor.focus();
  // };

  var token = sessionStorage.getItem("tokenValue");
  async function postschedule() {
    let response = "";
    try {
      response = await axios
        .post(
          "http://34.236.108.123:3000/home/compose-tweet",
          { body: inputStr, postedAt: year + "/" + monthnumber + "/" + date },
          { headers: { Authorization: "Bearer " + token } }
        )
        .then((res) => res.data);
      //console.log("herererer", response.poll);

      return response;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
    return response;
  }
  async function postimage() {
    let response = "";
    try {
      response = await axios
        .post(
          "http://34.236.108.123:3000/home/compose-tweet",
          { body: inputStr, media: [image] },
          { headers: { Authorization: "Bearer " + token } }
        )
        .then((res) => res.data);
      //console.log("herererer", response.poll);

      return response;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
    return response;
  }
  let [imageurl,setimageurl]=React.useState()

  const uploadImage = async (e) => {
    // set_flag_stop_working(1);
    // if (counter_for_images < 5) {
     
    //   const files = this.myFiles.files
    //   // Define what type of file to accept:
    //   const accept = ["image/png"];
    //   if (accept.indexOf(files[0].mediaType) > -1) {   
    //     setimageurl  (files[0].getAsDataURL())    
    //        }
    //   }
    //   console.log(files[0])
  
    //   const file = e.target.files;
    //   const data = new FormData();
    //   const reader = new FileReader();
    //   file.readAsDataURL(e.target.files);
     
    //   data.append("file", file);
    //   data.append("upload_preset", "darwin");
    //   setLoading(true);
    //   set_flag_img(true);
    //   const res = await fetch(
    //     "	https://api.cloudinary.com/v1_1/dxifxd1ms/image/upload",
    //     {
    //       method: "POST",
    //       body: data,
    //     }
    //   );
    //   file.addEventListener("load", () => {
    //     console.log(file.result);
		// 	});
    //   // const file = await res.json();
    //   // image[counter_for_images] = file.secure_url;
    //   if (image[counter_for_images] !== undefined) {
    //     setImage((state) => [...state, image]);
    //     set_counter_for_images(++counter_for_images);
    //   }
    //   setLoading(false);
    // }
  };
 

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const onEmojiClick = (event, emojiObject) => {
    setInputStr((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

  function handle_delete_img1() {
    setImage(
      image.filter(function (element) {
        return image.indexOf(element) !== 0;
      })
    );
    set_counter_for_images(--counter_for_images);
    if (counter_for_images === 0) {
      set_flag_img(false);
      set_flag_stop_working(0);
    }
  }
  function handle_delete_img2() {
    setImage(
      image.filter(function (element) {
        return image.indexOf(element) !== 1;
      })
    );
    set_counter_for_images(--counter_for_images);
    if (counter_for_images === 0) {
      set_flag_img(false);
      set_flag_stop_working(0);
    }
  }
  function handle_delete_img3() {
    setImage(
      image.filter(function (element) {
        return image.indexOf(element) !== 2;
      })
    );
    set_counter_for_images(--counter_for_images);
    if (counter_for_images === 0) {
      set_flag_img(false);
      set_flag_stop_working(0);
    }
  }
  function handle_delete_img4() {
    setImage(
      image.filter(function (element) {
        return image.indexOf(element) !== 3;
      })
    );
    set_counter_for_images(--counter_for_images);
    if (counter_for_images === 0) {
      set_flag_img(false);
      set_flag_stop_working(0);
    }
  }
  function handlechangeT() {
    //reset the textbox,post the tweet
    if (flag2 === 1) {
      tweets.unshift({
        id: 4,
        name: "Remonda",
        userName: "Remonda_95",
        content: inputStr,
        avatar: "",
        image: "",
        likeCount: 0,
        repliesCount: 0,
        retweetCount: 0,
      });
      var data =
        '{"userId":"62648da149a666a904026356","body":' +
        inputStr +
        ',"media": []}';
      var config = {
        method: "post",
        url: "http://34.236.108.123:3000/home/compose-tweet",
        headers: {},
        data: data,
      };

      async function PostTweet() {
        let response = "";
        try {
          response = await axios.post(
            "http://34.236.108.123:3000/home/compose-tweet",
            { body: inputStr, media: [], hashtags: [] },

            { headers: { Authorization: "Bearer " + token } }
          );
          return response.data;
        } catch (error) {
          if (error.response) {
            return error.response;
          }
        }
        // console.log(response);
        return response;
      }

      
      async function PostReply() {
        let response = "";
        try {
          response = await axios.post(
            "http://34.236.108.123:3000/home/" + props.tweet_id + "/reply",
            { body: inputStr, media: [], hashtags: ["hashtag2"] },
            { headers: { Authorization: "Bearer " + token } }
          );
          return response.data;
        } catch (error) {
          if (error.response) {
            return error.response;
          }
        }
        console.log(response);
        return response;
      }
      if (props.flag_reply === true) {
        PostReply();
        props.postingFlag();
      } else {
        PostTweet();
        props.postingFlag();
      }
      //b3mel delete lel images lma ados tweet
      handle_delete_img2();
      handle_delete_img1();
      handle_delete_img3();
      handle_delete_img4();
      // text = "";
      setInputStr("");
      setflag2(0);
      if (props.flag_tweetpopuppage === 1) {
        props.settextPassedToTheTweetbutton(false);
      }
    }
    if (flag2 === 2) {
      // text = "";
      postschedule();
      //b save el tweets 3shan a3redha fy el scheduled tweets fy el schedular
      scheduled_tweets.push({
        content: inputStr,
        weekdayName: weekdayName,
        month: month,
        time: time,
        date: date,
        year: year,
        am_pm: am_pm,
      });
      // seti(++i)
      setInputStr("");
      set_scheduled_tweets(scheduled_tweets);
      //b3mel delete lel images lma ados schedule
      handle_delete_img2();
      handle_delete_img1();
      handle_delete_img3();
      handle_delete_img4();
      if (props.flag_tweetpopuppage === 1) {
        props.settextPassedToTheTweetbutton(false);
      }
      setflag2_toschedule(1);

      setscheduledtweetsflag(1);
      // scheduled_tweets.unshift( { id:3 ,weekday : props.weekdayName , month:props.month , daynumber:props.weekday_number ,year:props.year ,am_pm:props.am_pm ,content:text })
      //console.log(scheduled_tweets)
    }
  }
  function handleChange(event) {
    //check on the length of the text if >280 then change the tweet img
    text = event.target.value;

    if (flag2_toschedule === 2) {
      if (text.length === 0 || text.length > 280) {
        flag2 = 0;
        setflag2(0);
        setInputStr(text);
      } else if (280 >= text.length && text.length > 0) {
        flag2 = 2;
        setflag2(2);
        setInputStr(text);
      }
    } else {
      if (text.length === 0 || text.length > 280) {
        flag2 = 0;
        setflag2(0);
        setInputStr(text);
      } else if (text.length > 0 || text.length < 280) {
        flag2 = 1;
        setflag2(1);
        setInputStr(text);
      }
    }
    if (props.flag_tweetpopuppage === 1) {
      if (text.length > 0) {
        //for the check if ther is text to show the save discard pop page in the side bar button tweet
        props.settextPassedToTheTweetbutton(true);
      } else {
        props.settextPassedToTheTweetbutton(false);
      }
    }
  }

  function open_pop_over(event) {
    setAnchorEl(event.currentTarget);
    setShowPicker(true);
  }
  return (
    <div>
      {flag2_toschedule !== 0 ? (
        <div className="cont3">
          <div className="cont2">
            {flag2_toschedule === 2 ? (
              <div>
                <CalendarMonthOutlinedIcon sx={calendericon} />
                <h5 className="sendstatus_inputtext" style={calenderstatus}>
                  Will send on {weekdayName} , {month} {date},{year} at {time}{" "}
                  {am_pm}{" "}
                </h5>
              </div>
            ) : null}
            <TextareaAutosize
              minRows={5}
              className="inputtext"
              placeholder={props.msg}
              value={inputStr}
              onChange={handleChange}
            />
            {/* <Editor
            editorState={state.editorState}
            onChange={onChange}
            plugins={plugins}
            ref={(element) => {
              Editor = element;
            }}
          />  */}
          </div>

          {counter_for_images === 1 ? (
            <div>
              {console.log(
                "flag stop working from upload image2 =" +
                  props.flag_tweetpopuppage
              )}
              <input
                type="image"
                src={image[0]}
                alt=""
                className="image_to_beuploaded"
              />
              <CloseTwoToneIcon
                onClick={handle_delete_img2}
                sx={{
                  "&:hover": {
                    backgroundColor: "#3C3A3A",
                    borderRadius: "50%",
                  },
                  marginBottom: "50%",
                  color: "white",
                  transform: "translate(-50%, -50%)",
                  marginLeft: "-70%",
                  marginTop: "-50%",
                }}
              />
            </div>
          ) : null}

          {counter_for_images === 2 ? (
            <div className="cont_of_images2">
              <input
                type="image"
                src={image[0]}
                alt=""
                className="image1_to_beuploaded2"
              />
              <CloseTwoToneIcon
                onClick={handle_delete_img2}
                sx={{
                  "&:hover": {
                    backgroundColor: "#3C3A3A",
                    borderRadius: "50%",
                  },
                  color: "white",
                  transform: "translate(-50%, -50%)",
                  marginLeft: "-37%",
                  marginTop: "6%",
                }}
              />
              <input
                type="image"
                src={image[1]}
                alt=""
                className="image2_to_beuploaded2"
              />
              <CloseTwoToneIcon
                onClick={handle_delete_img2}
                sx={{
                  "&:hover": {
                    backgroundColor: "#3C3A3A",
                    borderRadius: "50%",
                  },
                  color: "white",
                  transform: "translate(-50%, -50%)",
                  marginLeft: "-35%",
                  marginTop: "8%",
                }}
              />
            </div>
          ) : null}
          {counter_for_images === 3 ? (
            <div>
              <div className="cont_of_images3">
                <input
                  type="image"
                  src={image[0]}
                  alt=""
                  className="image1_to_beuploaded3"
                />
                <CloseTwoToneIcon
                  onClick={handle_delete_img2}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#3C3A3A",
                      borderRadius: "50%",
                    },
                    color: "white",
                    transform: "translate(-50%, -50%)",
                    marginLeft: "-27%",
                    marginTop: "5%",
                    marginBottom: "0%",
                  }}
                />
                <div className="cont_of_images3_secoundtwoimages">
                  <input
                    type="image"
                    src={image[1]}
                    alt=""
                    className="image2_to_beuploaded3"
                  />
                  <CloseTwoToneIcon
                    onClick={handle_delete_img2}
                    sx={{
                      "&:hover": {
                        backgroundColor: "#3C3A3A",
                        borderRadius: "50%",
                      },
                      color: "white",
                      transform: "translate(-50%, -50%)",
                      marginLeft: "30%",
                      marginTop: "-18%",
                    }}
                  />
                </div>

                <input
                  type="image"
                  src={image[2]}
                  alt=""
                  className="image3_to_beuploaded3"
                />
                <CloseTwoToneIcon
                  onClick={handle_delete_img2}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#3C3A3A",
                      borderRadius: "50%",
                    },
                    color: "white",
                    transform: "translate(-50%, -50%)",
                    marginLeft: "-27%",
                    marginTop: "28%",
                  }}
                />
              </div>
            </div>
          ) : null}

          {counter_for_images > 3 && (
            <div>
              <div className="cont_of_images4_first_two_images">
                <input
                  type="image"
                  src={image[0]}
                  alt=""
                  className="image1_to_beuploaded4"
                />
                <CloseTwoToneIcon
                  onClick={handle_delete_img2}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#3C3A3A",
                      borderRadius: "50%",
                    },
                    color: "white",
                    transform: "translate(-50%, -50%)",
                    marginLeft: "-38%",
                    marginTop: "5%",
                    marginBottom: "0%",
                  }}
                />
                <input
                  type="image"
                  src={image[1]}
                  alt=""
                  className="image2_to_beuploaded4"
                />

                <CloseTwoToneIcon
                  onClick={handle_delete_img2}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#3C3A3A",
                      borderRadius: "50%",
                    },
                    color: "white",
                    transform: "translate(-50%, -50%)",
                    marginLeft: "-37%",
                    marginTop: "5%",
                  }}
                />
              </div>
              <div className="cont_of_images4_secound_two_images">
                <input
                  type="image"
                  src={image[2]}
                  alt=""
                  className="image3_to_beuploaded4"
                />
                <CloseTwoToneIcon
                  onClick={handle_delete_img3}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#3C3A3A",
                      borderRadius: "50%",
                    },
                    color: "white",
                    transform: "translate(-50%, -50%)",
                    marginLeft: "-38%",
                    marginTop: "10%",
                  }}
                />
                <input
                  type="image"
                  src={image[3]}
                  alt=""
                  className="image4_to_beuploaded4"
                />
                <CloseTwoToneIcon
                  onClick={handle_delete_img4}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#3C3A3A",
                      borderRadius: "50%",
                    },
                    color: "white",
                    transform: "translate(-50%, -50%)",
                    marginLeft: "-38%",
                    marginTop: "10%",
                  }}
                />
              </div>
            </div>
          )}
        </div>
      ) : null}

      <div className="iconsfooter">
        <div className="icons">
          {props.flag_reply !== true && (
            <Poll
              className="icons"
              flag_stop_working={flag2_toschedule - 1}
              classname={"Poll"}
              setflag_stop_working={setflag2_toschedule}
              tweet_id={props.tweet_id}
            />
          )}
        </div>

        {(flag2_toschedule === 1 || flag2_toschedule === 2) && (
          <div className="icons">
            <div className="image-upload">
              <label htmlFor="file-input">
                <CollectionsIcon className={props.classname_media} />
              </label>
              <input id="file-input" type="file" onChange={uploadImage} />
            </div>
            <SentimentSatisfiedAltIcon
              className={props.classname_emoji}
              onClick={open_pop_over}
            />

            <IconGif classname={"Gif"} />

            {props.flag_reply !== true && (
              <IconSchedule
                scheduled_tweets={props.scheduled_tweets}
                scheduledtweetsflag={scheduledtweetsflag}
                classname={"Schedule"}
                flagconfirm={props.flagconfirm}
                setweekdayName={setweekdayName}
                setyear={setyear}
                settime={settime}
                setdate={setdate}
                setmonth={setmonth}
                setam_pm={setam_pm}
                setmonthnumber={setmonthnumber}
                setflag2_toschedule={setflag2_toschedule}
                setscheduledtweets={setscheduledtweetsflag}
              />
            )}
          </div>
        )}
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          sx={{
            width: "35%",
            height: "50%",
            marginTop: "-7%",
            marginLeft: "10%",
          }}
        >
          {showPicker && (
            <Picker
              disableSkinTonePicker="true"
              pickerStyle={{
                width: "100%",
                "&hover": { backgroundColor: "black" },
              }}
              onEmojiClick={onEmojiClick}
            />
          )}
        </Popover>

        {flag2_toschedule !== 0 && flag2_toschedule !== 2 ? (
          <div>
            {props.flag_tweetpopuppage != 1 ? (
              <div>
                {flag2 === 1 ? (
                  <Button sx={tweetbutton} onClick={handlechangeT}>
                    Tweet
                  </Button>
                ) : (
                  <Button sx={tweetbuttonblur} onClick={handlechangeT}>
                    Tweet
                  </Button>
                )}{" "}
              </div>
            ) : (
              <div>
                {flag2 === 1 ? (
                  <Button sx={tweetbutton_popuppage} onClick={handlechangeT}>
                    Tweet
                  </Button>
                ) : (
                  <Button
                    sx={tweetbutton_popuppageblur}
                    onClick={handlechangeT}
                  >
                    Tweet
                  </Button>
                )}
              </div>
            )}
          </div>
        ) : flag2_toschedule == 2 ? (
          <div>
            {props.flag_tweetpopuppage != 1 ? (
              <div>
                {flag2 === 2 ? (
                  <Button
                    sx={schedulebutton}
                    className={props.classname}
                    onClick={handlechangeT}
                  >
                    Schedule
                  </Button>
                ) : (
                  <Button
                    sx={schedulebuttonblur}
                    className={props.classname}
                    onClick={handlechangeT}
                  >
                    Schedule
                  </Button>
                )}
              </div>
            ) : (
              <div>
                {flag2 === 2 ? (
                  <Button
                    sx={schedulebutton_popuppage}
                    className={props.classname}
                    onClick={handlechangeT}
                  >
                    Schedule
                  </Button>
                ) : (
                  <Button
                    sx={schedulebutton_popuppageblur}
                    className={props.classname}
                    onClick={handlechangeT}
                  >
                    Schedule
                  </Button>
                )}
              </div>
            )}
          </div>
        ) : null}
      </div>
      <div></div>
    </div>
  );
}

export default Inputtext;
