import React from "react";
import App from "../../App";
import ReactDOM from "react-dom";
import Tweet from "../images/tweet2.png";
import Tweetblur from "../images/tweet1.png";
import tweets from "../Tweets.js";
import schedular from "../images/schedular.png";
import schedularblur from "../images/schedularblur.png";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import scheduled_tweets from "../Icons/schedule/scheduled_tweets";
import Picker from "emoji-picker-react";
import Popover from "@mui/material/Popover";
import "./inputtext_1img.css";
import { useState } from "react";
import IconPoll from "../Icons/poll/IconPoll";
import IconGif from "../Icons/gif/IconGif";
import IconSchedule from "../Icons/schedule/IconSchedule";
import Schedule from "../images/schedule.png";
import Media from "../images/media.png";
import pollblur from "../images/pollblur.png";
import poll from "../images/poll.png";
import Happyface from "../images/happyface.png";
import Gif from "../images/gif.png";
import Poll from "../Icons/poll/Poll";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import { borderRadius } from "@mui/system";
import axios from "axios";
import { IconButton } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
var token=sessionStorage.getItem("tokenValue");

function Inputtext(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  let [flag2, setflag2] = React.useState(0);
  let [img, setimg] = React.useState(Tweetblur);
  let [img2, setimg2] = React.useState(schedularblur);
  let [text, settext] = React.useState("");
  // let [schedule_flag,setschedule_flag]=React.useStete(0);
  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  let [image, setImage] = React.useState([""]);
  const [loading, setLoading] = React.useState(false);
  const [flag_img, set_flag_img] = React.useState(false);
  const [flag_stop_working,set_flag_stop_working]=React.useState(0);
  let [counter_for_images, set_counter_for_images] = React.useState(0);
  let [scheduled_tweets,set_scheduled_tweets]=React.useState([{content: "", weekdayName: "",month:0,date:0, year: 0, time : "", am_pm: ""}])
  const uploadImage = async (e) => {
   set_flag_stop_working(1)
    if (counter_for_images < 5) {
      const files = e.target.files;
      const data = new FormData();
      data.append("file", files[0]);
      data.append("upload_preset", "darwin");
      setLoading(true);
      set_flag_img(true);
      const res = await fetch(
        "	https://api.cloudinary.com/v1_1/dxifxd1ms/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const file = await res.json();
      image[counter_for_images] = file.secure_url;
      if (image[counter_for_images] !== undefined) {
        setImage((state) => [...state, image]);
        set_counter_for_images(++counter_for_images);
      }
      setLoading(false);
    }
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
      set_flag_stop_working(0)
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
      set_flag_stop_working(0)
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
      set_flag_stop_working(0)
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
      set_flag_stop_working(0)
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
      var data = '{"userId":"62648da149a666a904026356","body":'+inputStr+',"media": []}';
        var config = {
          method: 'post',
          url: 'http://34.236.108.123:3000/home/compose-tweet',
          headers: { },
          data:data
        };
        
        async function PostTweet() {
          let response = '';
          try {
            response = await axios.post('http://34.236.108.123:3000/home/compose-tweet',{body:inputStr,media: []},{headers: {Authorization:"Bearer "+token}});
            return (response.data);
          } catch (error) {
            if (error.response) {
              return (error.response);
            }
          }
          console.log(response);
          return (response);
        }
        PostTweet();
        props.postingFlag();
        //b3mel delete lel images lma ados tweet 
        handle_delete_img2();
        handle_delete_img1();
        handle_delete_img3();
        handle_delete_img4();
      text = "";
      setInputStr(text);
      setimg(Tweetblur);
      setflag2(0);
      ReactDOM.render(<App flag={1} />, document.getElementById("root"));
    }
    if (flag2 === 2) {
      text = "";
      setInputStr(text);
      setimg2(schedularblur);
      //b save el tweets 3shan a3redha fy el scheduled tweets fy el schedular
      scheduled_tweets.push({content:text, weekdayName:props.weekdayName,month:props.month, time: props.time ,date:props.date,year:props.year,am_pm: props.am_pm })
      set_scheduled_tweets(scheduled_tweets)
          //b3mel delete lel images lma ados schedule 
      handle_delete_img2();
      handle_delete_img1();
      handle_delete_img3();
      handle_delete_img4();
      // scheduled_tweets.unshift( { id:3 ,weekday : props.weekdayName , month:props.month , daynumber:props.weekday_number ,year:props.year ,am_pm:props.am_pm ,content:text })
      //console.log(scheduled_tweets)
      ReactDOM.render(
        <App flag={1} scheduled_tweets={scheduled_tweets} flag_confirm={0} />,
        document.getElementById("root")
      );
    }
  }
  function handleChange(event) {
    //check on the length of the text if >280 then change the tweet img

    text = event.target.value;
    if (props.flag2 === 2) {
      if (text.length === 0 || text.length > 280) {
        flag2 = 0;
        setflag2(0);
        img2 = schedularblur;
        setimg2(img2);
        setInputStr(text);
      } else if (280 >= text.length && text.length > 0) {
        flag2 = 1;
        setflag2(1);
        setInputStr(text);
        img2 = schedular;
        setimg2(img2);
      }
    } else {
      if (text.length === 0 || text.length > 280) {
        flag2 = 0;
        setflag2(0);
        img = Tweetblur;
        setimg(img);
        setInputStr(text);
      } else if (text.length > 0 || text.length < 280) {
        flag2 = 1;
        setflag2(1);
        setInputStr(text);
        img = Tweet;
        setimg(img);
      }
    }
  }

  function open_pop_over(event) {
    setAnchorEl(event.currentTarget);
    setShowPicker(true);
  }
  return (
<div>
      {/* dh lw mfesh image*/}
  {!flag_img && (
   <div>
      {props.flag2 !== 0 ? 
        <div className="cont3">
            <textarea
                className="inputtext"
                type="textbox"
                size="50"
                value={inputStr}
                onChange={handleChange}
                placeholder={props.msg}
            />
               {/** el flag dh 3shan a3ref hasel scheduling wla la */}
          {props.flag2 === 2 ? (
            <div>
              <CalendarMonthOutlinedIcon
                sx={{
                  marginBottom: "50%",
                  marginTop: "-46%",
                  width: "5%",
                  height: "5%",
                }}
              />
              <h5
                className="sendstatus_inputtext"
                style={{
                  marginTop: "-57%",
                  marginLeft: "7%",
                  fontSize: '95%',
                  fontFamily:'"Gill Sans", "Gill Sans MT", "Calibri", "Trebuchet MS", sans-serif',
                  fontWeight: 'lighter',
                  color: 'rgb(115, 115, 115)',
                }}
              >
                {console.log(props.date)}
                Will send on {props.weekdayName} , {props.month} {props.date},{props.year} at {props.time} {props.am_pm}{" "}
              </h5>
            </div>
          ) : null}
         
          <div className="iconsfooter">
                   {/** icon el media w enha tb2a mtzbta 3la input type file*/}
                   <img
                  alt=""
                  src={props.img}
                  className={props.classname_emoji}
                  onClick={open_pop_over}
                />
               <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                sx={{
                  width: "35%",
                  height: "50%",
                  marginTop: "-7%",
                  marginLeft:'10%',
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
                   <div className="image-upload">
                  <label htmlFor="file-input">
                    <img
                      src={props.img_media}
                      className={props.classname_media}
                      alt=""
                    />
                  </label>
                  <input id="file-input" type="file" onChange={uploadImage} />
                </div>
              {(props.flag2 === 1 || props.flag2 === 2) && (
                
                <div className="icons">
                  {props.flag2 === 2 ?
                  <IconPoll img={pollblur} flag_stop_working={props.flag2-1} classname={"Poll"}/>: <IconPoll img={poll} classname={"Poll"} />}
                  <IconGif img={Gif} classname={"Gif"} />
                  <IconSchedule
                    scheduled_tweets={props.scheduled_tweets}
                    img={Schedule}
                    classname={"Schedule"}
                    flagconfirm={props.flagconfirm}
                  />
                </div>
              )}
          
              {props.flag2 !== 0 && props.flag2 !== 2 ? (
            
            <input
              className={props.classname}
              type="image"
              src={img}
              alt=""
              onClick={handlechangeT}
            />

          ) : props.flag2 === 2 ? 
            
              <input
              className={props.classname}
                type="image"
                src={img2}
                alt=""
                onClick={handlechangeT}
              />

              : null}
            </div>
            </div>
            
                   :null }
         
      
      </div>
    )}


      {/* dh lw fy image */}
      {flag_img && 
        <div>
          {props.flag2 !== 0 ? (
            <div className="cont1">
              <CloseTwoToneIcon
                className="image1"
                onClick={handle_delete_img1}
                sx={{
                  "&:hover": {
                    backgroundColor: "#3C3A3A",
                    borderRadius: "50%",
                  },
                  color: "white",
                  transform: "translate(-50%, -50%)",
                  marginLeft: "8%",
                  marginTop: "50%",
                }}
              />
              <div className="cont_img_textbox">
                <textarea
                  className="inputtext_img"
                  type="textbox"
                  size="50"
                  value={inputStr}
                  onChange={handleChange}
                  placeholder={props.msg}
                />
                <div className="icons_img">
                  <div className="image-upload_img">
                    <label htmlFor="file-input_img">
                      <img
                        src={props.img_media}
                        className={props.classname_media + "_img"}
                        alt=""
                      />
                    </label>
                    <input
                      id="file-input_img"
                      type="file"
                      onChange={uploadImage}
                    />
                  </div>
                  <img
                    alt=""
                    src={props.img}
                    className={props.classname_emoji + "_img"}
                    onClick={open_pop_over}
                  />
                  {(props.flag2 === 1 || props.flag2 === 2) && (
                    <div className="icons_img">
                      <IconPoll img={pollblur} classname={"Poll_img"} flag_stop_working={flag_stop_working}/>
                      <IconGif img={Gif} classname={"Gif_img"} />
                      <IconSchedule 
                       scheduled_tweets={props.scheduled_tweets}
                        img={Schedule}
                        classname={"Schedule_img"}
                        flagconfirm={props.flagconfirm}
                      />
                    </div>
                  )}
                </div>

                {counter_for_images === 1 ? (
                  <div>
                    <input
                      type="image"
                      src={image[0]}
                      alt=""
                      className="image_to_beuploaded"
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
                        marginLeft: "-42%",
                        marginTop: "-80%",
                      }}
                    />
                  </div>
                ) : null}
                {counter_for_images === 3 ? (
                  <div>
                    <div className="cont_of_images3">
                      <CloseTwoToneIcon
                        onClick={handle_delete_img2}
                        sx={{
                          "&:hover": {
                            backgroundColor: "#3C3A3A",
                            borderRadius: "50%",
                          },
                          color: "white",
                          transform: "translate(-50%, -50%)",
                          marginLeft: "60%",
                          marginTop: "-85%",
                          marginBottom: "75%",
                        }}
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
                          marginLeft: "-6%",
                          marginTop: "-50%",
                          marginBottom: "120%",
                        }}
                      />
                      <input
                        type="image"
                        src={image[0]}
                        alt=""
                        className="image1_to_beuploaded3"
                      />
                      <input
                        type="image"
                        src={image[1]}
                        alt=""
                        className="image2_to_beuploaded3"
                      />
                    </div>

                    <input
                      type="image"
                      src={image[2]}
                      alt=""
                      className="image3_to_beuploaded3"
                    />
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
                          marginLeft: "-42%",
                          marginTop: "-85%",
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
                          marginLeft: "-42%",
                          marginTop: "-40%",
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
                          marginLeft: "-40%",
                          marginTop: "-40%",
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>

              <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                sx={{ width: "35%", height: "50%", marginTop: "7%" }}
              >
                {showPicker && (
                  <Picker
                    disableSkinTonePicker="true"
                    pickerStyle={{ width: "100%" }}
                    onEmojiClick={onEmojiClick}
                  />
                )}
              </Popover>
            </div>
          ) : null}

          {counter_for_images === 1 ? (
            <div>
              {" "}
              {props.flag2 === 2 ? (
                <div>
                  {" "}
                  <CalendarMonthOutlinedIcon
                    sx={{
                      marginBottom: "273%",
                      marginTop: "-130%",
                      width: "5%",
                      height: "5%",
                    }}
                  />
                  <h5
                    className="sendstatus_img"
                    style={{
                      marginTop: "-278%",
                      marginBottom: "-9%",
                      marginLeft: "7%",
                      fontSize: '95%',
                      fontFamily:'"Gill Sans", "Gill Sans MT", "Calibri", "Trebuchet MS", sans-serif',
                      fontWeight: 'lighter',
                      color: 'rgb(115, 115, 115)',
                    }}
                  >
                    Will send on {props.weekdayName} , {props.month}{" "}
                    {props.date}, {props.year} at {props.time} {props.am_pm}{" "}
                  </h5>
                </div>
              ) : null}
              {props.flag2 !== 0 && props.flag2 !== 2 ? (
                <div className="cont1">
                  <input
                    className={props.classname + "_img"}
                    type="image"
                    src={img}
                    alt=""
                    onClick={handlechangeT}
                  />
                </div>
              ) : props.flag2 === 2 ? (
                <div className="cont1">
                  <input
                    className={props.classname + "_img"}
                    style={{
                      width: "20%",
                      marginLeft: "80%",
                      marginTop: "-5%",
                    }}
                    type="image"
                    src={img2}
                    alt=""
                    onClick={handlechangeT}
                  />
                </div>
              ) : null}{" "}
            </div>
          ) : counter_for_images === 2 ? (
            <div>
              {" "}
              {props.flag2 === 2 ? (
                <div>
                  {" "}
                  <CalendarMonthOutlinedIcon
                    sx={{
                      marginBottom: "300%",
                      marginTop: "-127%",
                      width: "5%",
                      height: "5%",
                    }}
                  />
                  <h5
                    className="sendstatus_img"
                    style={{
                      marginTop: "-304%",
                      marginBottom: "-9%",
                      marginLeft: "7%",
                      fontSize: '95%',
                      fontFamily:'"Gill Sans", "Gill Sans MT", "Calibri", "Trebuchet MS", sans-serif',
                      fontWeight: 'lighter',
                      color: 'rgb(115, 115, 115)',
                    }}
                  >
                    Will send on {props.weekdayName} , {props.month}{" "}
                    {props.date}, {props.year} at {props.time} {props.am_pm}{" "}
                  </h5>
                </div>
              ) : null}
              {props.flag2 !== 0 && props.flag2 !== 2 ? (
                <div className="cont1">
                  <input
                    className={props.classname + "_img"}
                    type="image"
                    src={img}
                    alt=""
                    onClick={handlechangeT}
                  />
                </div>
              ) : props.flag2 === 2 ? (
                
                  <input
                    style={{
                      width: "20%",
                      marginLeft: "80%",
                      marginTop: "-5%",
                      marginBottom: "10%",
                    }}
                    type="image"
                    src={img2}
                    alt=""
                    onClick={handlechangeT}
                  />
                
              ) : null}{" "}
            </div>
          ) : counter_for_images === 3 ? (
            <div>
              {" "}
              {props.flag2 === 2 ? (
                <div>
                  {" "}
                  <CalendarMonthOutlinedIcon
                    sx={{
                      marginBottom: "273%",
                      marginTop: "-123%",
                      width: "5%",
                      height: "5%",
                    }}
                  />
                  <h5
                    className="sendstatus_img"
                    style={{
                      marginTop: "-277%",
                      marginBottom: "-9%",
                      marginLeft: "7%",
                      fontSize: '95%',
                      fontFamily:'"Gill Sans", "Gill Sans MT", "Calibri", "Trebuchet MS", sans-serif',
                      fontWeight: 'lighter',
                      color: 'rgb(115, 115, 115)',
                    }}
                  >
                    Will send on {props.weekdayName} , {props.month}{" "}
                    {props.date}, {props.year} at {props.time} {props.am_pm}{" "}
                  </h5>
                </div>
              ) : null}
              {props.flag2 !== 0 && props.flag2 !== 2 ? (
                  <input
                  style={{ width: '16%',
                    height: '16%',
                    border: 'none',
                    marginLeft: '70%',
                    marginTop: '-8%',
                    marginBottom: '10%',}}
                    type="image"
                    src={img}
                    alt=""
                    onClick={handlechangeT}
                  />
             
              ) : props.flag2 === 2 ? (
                  <input
                    className={props.classname + "_img"}
                    style={{ width: "24%", marginLeft: "80%",marginBottom:'-6%', }}
                    type="image"
                    src={img2}
                    alt=""
                    onClick={handlechangeT}
                  />
                
              ) : null}{" "}
            </div>
          ) : (
            <div>
              {" "}
              {props.flag2 === 2 ? (
                <div>
                  {" "}
                  <CalendarMonthOutlinedIcon
                    sx={{
                      marginBottom: "273%",
                      marginTop: "-130%",
                      width: "5%",
                      height: "5%",
                    }}
                  />
                  <h5
                    className="sendstatus_img"
                    style={{
                      marginTop: "-277%",
                      marginBottom: "-9%",
                      marginLeft: "7%",
                      fontSize: '95%',
                      fontFamily:'"Gill Sans", "Gill Sans MT", "Calibri", "Trebuchet MS", sans-serif',
                      fontWeight: 'lighter',
                      color: 'rgb(115, 115, 115)',
                    }}
                  >
                    Will send on {props.weekdayName} , {props.month}{" "}
                    {props.date}, {props.year} at {props.time} {props.am_pm}{" "}
                  </h5>
                </div>
              ) : null}
              {props.flag2 !== 0 && props.flag2 !== 2 ? (
                <div className="cont1">
                  <input
                    className={props.classname + "_img"}
                    type="image"
                    src={img}
                    alt=""
                    onClick={handlechangeT}
                  />
                </div>
              ) : props.flag2 === 2 ? (
                <div className="cont1">
                  <input
                    style={{ width: "20%", marginLeft: "80%", marginTop:'-7%' }}
                    type="image"
                    src={img2}
                    alt=""
                    onClick={handlechangeT}
                  />
                </div>
              ) : null}{" "}
            
            </div>
          )}
        </div>
        
      }
    </div>
      );
}

export default Inputtext;
