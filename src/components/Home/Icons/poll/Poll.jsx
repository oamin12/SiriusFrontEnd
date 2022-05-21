import React from "react";
import IconGif from "../gif/IconGif";
import IconSchedule from "../schedule/IconSchedule";
import Add from "../../images/addatreadicon.png";
import "./poll.css";
import { TextField } from "@mui/material";
import Picker from "emoji-picker-react";
import Popover from "@mui/material/Popover";
import { useState } from "react";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import CollectionsIcon from "@mui/icons-material/Collections";
import Button from "@mui/material/Button";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";

function Poll(props) {
  let [flag1, setflag1] = React.useState(0); //those flags used for reseting the textboxes
  let [flag2, setflag2] = React.useState(0);
  let [flag3, setflag3] = React.useState(0);
  let [flag5, setflag5] = React.useState(1);
  let [flag6, setflag6] = React.useState(1);
  let [counter, setcounter] = React.useState(2);
  let [flag9, setflag9] = React.useState(0);
  let name;
  let [textc1, settextc1] = React.useState("");
  let [textc2, settextc2] = React.useState("");
  let [textc3, settextc3] = React.useState(""); //values =>used for reseting the text boxes
  let [textc4, settextc4] = React.useState("");
  let [textc, settextc] = React.useState("");
  let [sel_value1, setsel_value1] = React.useState(0);
  let [sel_value, setsel_value] = React.useState(5); //values of the drop down menus
  let [sel_value2, setsel_value2] = React.useState(0);
  const [flag_stop_working, set_flag_stop_working] = React.useState(1);
  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const onEmojiClick = (event, emojiObject) => {
    settextc((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

  function open_pop_over(event) {
    setAnchorEl(event.currentTarget);
    setShowPicker(true);
  }

  function handlechange(event) {
    name = event.target.name;
    /*on change of the text box we check every time is the 2 choices text box written
     in or not to know weather the user can tweet or not*/
    if (name === "choice1") {
      textc1 = event.target.value;
      if (textc1.length !== 0 && textc1.length <= 25) {
        //if the text between 0 and 25 letters then it can be posted
        flag1 = 1;
        setflag1(flag1);
        settextc1(textc1);
      } else {
        settextc1(textc1);
        flag1 = 0;
        setflag1(flag1);
      }
    } else if (name === "choice2") {
      textc2 = event.target.value;
      if (textc2.length !== 0 && textc2.length <= 25) {
        flag2 = 1;
        setflag2(flag2);
        settextc2(textc2);
      } else {
        settextc2(textc2);
        flag2 = 0;
        setflag2(flag2);
      }
    } else if (name === "inputbox_for_poll") {
      textc = event.target.value;
      if (textc.length !== 0 && textc.length <= 280) {
        flag3 = 1;
        setflag3(flag3);
        settextc(textc);
      } else {
        settextc(textc);
        flag3 = 0;
        setflag3(flag3);
      }
    } else if (name === "choice3") {
      //not necssary to be filled but if filled must be less than 25
      textc3 = event.target.value;
      if (textc3.length > 25) {
        flag5 = 0;
        setflag5(flag5);
        settextc3(textc3);
      } else {
        settextc3(textc3);
        flag5 = 1;
        setflag5(flag5);
      }
    } else if (name === "choice4") {
      textc4 = event.target.value;
      if (textc4.length > 25) {
        //not necssary to be filled bu if filled must be less than 25
        flag6 = 0;
        setflag6(flag6);
        settextc4(textc4);
      } else {
        settextc4(textc4);
        flag6 = 1;
        setflag6(flag6);
      }
    }

    /*it will reset the text area on the click of the tweet button and save the data*/
  }
  //on click of the tweet button text boxes and select boxes are reset
  function onclick() {
    if (
      flag1 === 1 &&
      flag2 === 1 &&
      flag3 === 1 && //checking thar all flags are 1 =>means that all required text boxed are filled , and we can tweet
      flag5 === 1 &&
      flag6 === 1
    ) {
      textc = "";
      textc1 = "";
      textc2 = ""; //text are reset to empty
      textc3 = "";
      textc4 = "";
      settextc(textc);
      settextc1(textc1);
      settextc2(textc2);
      settextc3(textc3);
      settextc4(textc4);
      setsel_value1(0);
      setsel_value2(0);
      setsel_value(5); //trying to make the drop downmenus to reset on tweet button
      flag1 = 0; //setting the flags to zero once more => the text boxes are empty
      flag2 = 0;
      flag3 = 0;
      flag6 = 1; //the flags of the choice 3 and 4 the default of them is that they are valid whed they are not filled
      flag5 = 1;
      setflag1(flag1);
      setflag2(flag2);
      setflag3(flag3);
      setflag5(flag5);
      setflag6(flag6);
    }
  }
  function removepoll() {
    //we reneder the app a new time when removing the poll
    setflag9(0);
    set_flag_stop_working(0);
    setcounter(2); //reseting the number of text boxes when removing the poll
    props.setflag_stop_working(1);
  }

  function add_textbox() {
    //if we want to add a text box we fisrt check on our counter(max textboxes to be added is two)
    counter = counter + 1;
    setcounter(counter);
    if (counter === 3) {
      flag9 = 1; //the flag that is involved in the conditional rendering of adding a choice box
      setflag9(flag9);
    }

    if (counter >= 4) {
      flag9 = 2; //it takes one or 2 or zero bec 0 means no text boxes ,1 means 1 text box 2 means 2 textboxes=>related to the arrangment of the conditional rendering
      setflag9(flag9);
    }
  }
  //function responsible of reseting and setting the value of the drop down menus and chechink that the 3 are not zero
  function handle_select(event) {
    let valueS = event.target.value;
    let nameS = event.target.name;
    if (nameS === "hours") {
      sel_value1 = valueS;
      setsel_value1(sel_value1);
      if (sel_value === "0" && sel_value2 === "0" && valueS === "0") {
        //we must check on valueS not sel_value1 bec selvalue1 will not be changed whed we apply the condition
        sel_value = 5;
        setsel_value(sel_value);
        console.log("entered1");
      }
    }

    if (nameS === "days") {
      sel_value2 = valueS;
      setsel_value2(sel_value2);
      if (sel_value === "0" && sel_value1 === "0" && valueS === "0") {
        sel_value = 5;
        console.log("entered2");
        setsel_value(sel_value);
      }
    }
    if (nameS === "minutes") {
      sel_value = valueS;
      setsel_value(valueS);
      if (sel_value1 === "0" && sel_value2 === "0" && valueS === "0") {
        sel_value = 5;
        setsel_value(sel_value);
        console.log("entered3");
      }
    }
  }
  function createpoll() {
    //the function that is responsible to change the flag that will hide the text box and create the poll
    console.log(props.flag_stop_working_from_tweetbutton);

    if (props.flag_stop_working !== 1) {
      flag9 = -1;
      setflag9(flag9);
      props.setflag_stop_working(0);
    }
  }
  return (
    <div>
      {flag9 === 0 && (
        <PollOutlinedIcon className={props.classname} onClick={createpoll} />
      )}
      {flag9 !== 0 ? (
        <div>
          {/* input texts for choices*/}

          <div>
            <div className="box">
              <TextareaAutosize
                minRows={3}
                className="Inputbox_for_poll"
                placeholder="Ask a question..."
                name="inputbox_for_poll"
                size="28"
                value={textc}
                onChange={handlechange}
              />


            </div>
            <div className="poll">
              <div className="choices">
                <TextField
                  className="choice1"
                  name="choice1"
                  label="Choice 1"
                  varient="filled"
                  onChange={handlechange}
                  value={textc1}
                />
                <br />
                <br />
                <TextField
                  className="choice2"
                  name="choice2"
                  label="Choice 2"
                  varient="filled"
                  onChange={handlechange}
                  value={textc2}
                />
                <br />
                <br />
                {/*the defualt of this flag is 0 => at the begining of the poll there is 2 choices only
                  then on clicking on the add icon the flag changes and choices are added*/}

                {flag9 === 1 && (
                  <div>
                    {/* <h4 className="header_choices">{value3}/25</h4>*/}
                    <TextField
                      className="choice3"
                      name="choice3"
                      label="Choice 3"
                      varient="filled"
                      onChange={handlechange}
                      value={textc3}
                    />
                  </div>
                )}

                {flag9 === 2 && (
                  <div>
                    {/*<h4 className="header_choices">{value3}/25</h4>*/}
                    <TextField
                      className="choice3"
                      name="choice3"
                      label="Choice 3"
                      varient="filled"
                      onChange={handlechange}
                      value={textc3}
                    />
                    <br />
                    <br />
                  </div>
                )}

                {flag9 === 2 && (
                  <div>
                    {/* <h4 className="header_choices">{value4}/25</h4>*/}
                    <TextField
                      className="choice4"
                      name="choice4"
                      label="Choice 4"
                      varient="filled"
                      onChange={handlechange}
                      value={textc4}
                    />
                  </div>
                )}
              </div>
              {/* drop down menus*/}
              <h3 className="poll_heading">Poll length </h3>
              <div className="selecting">
                <div className="dayscont">
                  <h3 className="days_heading">Days</h3>
                  <select
                    className="Days"
                    value={sel_value2}
                    onChange={handle_select}
                    name="days"
                  >
                    <option value="0"> 0 </option>
                    <option value="1"> 1 </option>
                    <option value="2"> 2 </option>
                    <option value="3"> 3 </option>
                    <option value="4"> 4 </option>
                    <option value="5"> 5 </option>
                    <option value="6"> 6 </option>
                    <option value="7"> 7 </option>
                  </select>
                </div>
                <div className="hourscont">
                  <h3 className="hours_heading">Hours</h3>
                  <select
                    className="hours"
                    value={sel_value1}
                    onChange={handle_select}
                    name="hours"
                  >
                    <option value="0"> 0 </option>{" "}
                    <option value={1}> 1 </option>
                    <option value="2"> 2 </option>
                    <option value="3"> 3 </option>
                    <option value="4"> 4 </option>
                    <option value="5"> 5 </option>
                    <option value="6"> 6 </option>{" "}
                    <option value="7"> 7 </option>
                    <option value="8"> 8 </option>
                    <option value="9"> 9 </option>
                    <option value="10"> 10 </option>
                    <option value="11"> 11 </option>{" "}
                    <option value="12"> 12 </option>
                    <option value="13"> 13 </option>{" "}
                    <option value="14"> 14 </option>
                    <option value="14"> 14 </option>{" "}
                    <option value="15"> 15 </option>
                    <option value="16"> 16 </option>{" "}
                    <option value="17"> 17 </option>
                    <option value="18"> 18 </option>{" "}
                    <option value="19"> 19 </option>
                    <option value="20"> 21 </option>{" "}
                    <option value="22"> 22 </option>
                    <option value="23">23</option>
                  </select>
                </div>
                <div className="minutescont">
                  <h3 className="minutes_heading">Minutes</h3>
                  <select
                    className="minutes"
                    value={sel_value}
                    onChange={handle_select}
                    name="minutes"
                  >
                    <option value="0"> 0 </option>{" "}
                    <option value="1"> 1 </option>
                    <option value="2"> 2 </option>
                    <option value="3"> 3 </option>
                    <option value="4"> 4 </option>
                    <option value="5"> 5 </option>
                    <option value="6"> 6 </option>{" "}
                    <option value="7"> 7 </option>
                    <option value="8"> 8 </option>
                    <option value="9"> 9 </option>
                    <option value="10"> 10 </option>{" "}
                    <option value="11"> 11 </option>
                    <option value="12"> 12 </option>{" "}
                    <option value="13"> 13 </option>
                    <option value="14"> 14 </option>
                    <option value="14"> 14 </option>{" "}
                    <option value="15"> 15 </option>
                    <option value="16"> 16 </option>{" "}
                    <option value="17"> 17 </option>
                    <option value="18"> 18 </option>{" "}
                    <option value="19"> 19 </option>
                    <option value="20"> 21 </option>{" "}
                    <option value="22"> 22 </option>
                    <option value="23">23</option>
                    <option value="24"> 24 </option>{" "}
                    <option value="25"> 25 </option>
                    <option value="26"> 26 </option>
                    <option value="27"> 27 </option>
                    <option value="28"> 28 </option>
                    <option value="29"> 29 </option>
                    <option value="30"> 30 </option>
                    <option value="31"> 31 </option>{" "}
                    <option value="32"> 32 </option>
                    <option value="33"> 33 </option>
                    <option value="34"> 34 </option>
                    <option value="35"> 35 </option>
                    <option value="36"> 36 </option>{" "}
                    <option value="37"> 37 </option>
                    <option value="38"> 38 </option>{" "}
                    <option value="39"> 39 </option>
                    <option value="40"> 40 </option>{" "}
                    <option value="41"> 41 </option>
                    <option value="42"> 42 </option>{" "}
                    <option value="43"> 43 </option>
                    <option value="44"> 44 </option>{" "}
                    <option value="45"> 45 </option>
                    <option value="46"> 46 </option>{" "}
                    <option value="22"> 47 </option>
                    <option value="48">48</option>{" "}
                    <option value="49">49</option>
                    <option value="50">50</option>{" "}
                    <option value="51">51</option>
                    <option value="52">52</option>{" "}
                    <option value="53">53</option>
                    <option value="54">54</option>{" "}
                    <option value="55">55</option>
                    <option value="56">56</option>{" "}
                    <option value="57">57</option>
                    <option value="58">58</option>{" "}
                    <option value="59">59</option>
                  </select>
                </div>
                <br />
              </div>
              {/*tweet button and remove poll button*/}

              <button onClick={removepoll} className="remove_poll">
                {" "}
                Remove poll{" "}
              </button>
            </div>

            {/* on click we see if we will reset */}
            <div className="Iconsblur">
              {/*by7sel infinte loop t2rbyen lma asod 3la poll fy poll f hwef el function bt3tha lma ab2a fy el poll*/}
              <Poll classname={"Pollblur"} flag_stop_working={1} />
              <CollectionsIcon className={"Mediablur"} />
              <SentimentSatisfiedAltIcon
                className="emojis"
                onClick={open_pop_over}
              />
              <IconGif classname={"Gifblur"} />
              <IconSchedule
                classname={"Scheduleblur"}
                flag_stop_working_from_poll_to_schedule={1}
              />
              <Button
                sx={{
                  width: "60%",
                  height: "40%",
                  position: "relative",
                  left: "-20%",
                  borderRadius: "300px",
                  fontStyle: "solid 5px ",
                  color: "white",
                  textTransform: "none",
                  backgroundColor: "rgb(29, 161, 242)",
                  "&:hover": {
                    backgroundColor: "#93CAEF",
                  },
                }}
                onClick={onclick}
              >
                Tweet
              </Button>
            </div>
            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              sx={{ width: "35%", height: "50%", marginTop: "-3%" }}
            >
              {showPicker && (
                <Picker
                  disableSkinTonePicker="true"
                  pickerStyle={{ width: "100%", margin: "0px" }}
                  onEmojiClick={onEmojiClick}
                />
              )}
            </Popover>
            <input
              type="image"
              className="IconAdd"
              src={Add}
              alt=""
              onClick={add_textbox}
            />
            {/* onclick we see if we are going to add a text box*/}
          </div>
        </div>
      ) : null}
    </div>
  );
}
export default Poll;
