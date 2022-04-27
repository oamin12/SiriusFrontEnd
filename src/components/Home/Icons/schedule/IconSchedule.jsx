import * as React from "react";
import "./schedule.css";
import App from "../../../App";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import { style } from "./inlinestylesheet_schedule";
import { confirmbutton_style } from "./inlinestylesheet_schedule";
import { calendericon_style } from "./inlinestylesheet_schedule";
import { am_pm_style } from "./inlinestylesheet_schedule";
import { months_style } from "./inlinestylesheet_schedule";
import { days_style } from "./inlinestylesheet_schedule";
import { hours_style } from "./inlinestylesheet_schedule";
import { years_style } from "./inlinestylesheet_schedule";
import { minutes_style } from "./inlinestylesheet_schedule";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import InputLabel from "@mui/material/InputLabel";
import { clearbutton_style } from "./inlinestylesheet_schedule";
import { updatebutton_style } from "./inlinestylesheet_schedule";
import { style1 } from "./inlinestylesheet_schedule";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function IconSchedule(props) {
  let currentDate = new Date();

  // function+variables to open and close the pop up page
  const [Open, setOpen] = React.useState(false);
  const [openScheduledTweets, setopenScheduledTweets] = React.useState(false);
  {
    /** dummy array schedule tweets*/
  }
  let [showScheduledTweets,set_showScheduledTweets]= React.useState(0)
  //variables to set the current time
  let [day_0_5, setday_0_5] = React.useState(currentDate.getDay());
  let [daymonth, setdaymonth] = React.useState(currentDate.getDate());
  let [weekdayName, setweekdayName] = React.useState(getName(day_0_5));
  let [flag_confirm, setflag_confirm] = React.useState(0);
  let [monthnumber, setmonthnumber] = React.useState(
    currentDate.getMonth() + 1
  );
  let [month, setmonth] = React.useState(
    convert_monthnumber_to_name(monthnumber)
  );

  let [year, setyear] = React.useState(currentDate.getFullYear());
  let [year_toset_theyear_value, set_year_toset_theyear_value] = React.useState(
    currentDate.getFullYear()
  );
  let [minutes, setminutes] = React.useState(currentDate.getMinutes());
  let [hours, sethours] = React.useState(currentDate.getHours());
  let [am_pm, setam_pm] = React.useState(
    0 < hours && (hours < 12 || hours === 12) ? "am" : "pm"
  );
  let [hours_1_12, sethours_1_12] = React.useState(
    0 < hours && (hours < 12 || hours === 12) ? hours : hours - 12
  );
  let [time, settime] = React.useState(
    minutes < 10 ? hours_1_12 + ": 0" + minutes : hours_1_12 + ":" + minutes
  );
  //used 3shan ashof h3red fy el dropdown menus 30 or 31 or 28 days
  let [flagmonthdays, set_flagmonthdays] = React.useState(
      monthnumber === 1 ||
      monthnumber === 3 ||
      monthnumber === 7 ||
      monthnumber === 8 ||
      monthnumber === 10 ||
      monthnumber === 12
      ? 1
      : monthnumber === 2
      ? 0
      : 2
  );
  //used to know if the user scheduled a month or a day that has passed , we nedd two flags for each one because if wee made a one flag
  // one of them will be 0 and the other will be setted with one
  let [flag_schedule_validation_months, setflag_schedule_validation_months] =
    React.useState(1);
  let [flag_schedule_validation_days, setflag_schedule_validation_days] =
    React.useState(1);
  var [backSchedule, set_backSchedule] = React.useState(0);
  var [deleteScheduledTweets, set_deleteScheduledTweets] = React.useState(0);
  var [editScheduledTweets, set_editScheduledTweets] = React.useState(0);
  //bydisplayel days mn 0 l 5

  //functions to convert the date from a numerical value from 0 to 6 to a week day name
  function getName(day) {
    if (day === 0) return "Sun";
    else if (day === 1) return "Mon";
    else if (day === 2) return "Tues";
    else if (day === 3) return "Wednes";
    else if (day === 4) return "Thurs";
    else if (day === 5) return "Fri";
    return "Sat";
  }

  //converting the number of months to a name
  function convert_monthnumber_to_name(monthnumber) {
    if (monthnumber === "1") {
      return "Jan";
    } else if (monthnumber === "2") {
      return "Feb";
    } else if (monthnumber === "3") {
      return "Mar";
    } else if (monthnumber === "4") {
      return "Apr";
    } else if (monthnumber === "5") {
      return "May";
    } else if (monthnumber === "6") {
      return "Jun";
    } else if (monthnumber === "7") {
      return "Jul";
    } else if (monthnumber === "8") {
      return "Aug";
    } else if (monthnumber === "9") {
      return "Sep";
    } else if (monthnumber === "10") {
      return "Oct";
    } else if (monthnumber === "11") {
      return "Nov";
    } else if (monthnumber === "12") {
      return "Dec";
    }
  }

  function ampm(hours) {
    //convert from am to pm
    if (0 < hours && (hours < 12 || hours === 12)) {
      //to display am and pm
      am_pm = "am";
    } else {
      am_pm = "pm";
    }
    return am_pm;
  }

  function closeschedule() {
    setOpen(false);

    if (flag_confirm === 0) {
      setmonthnumber(currentDate.getMonth() + 1);
      setmonth(convert_monthnumber_to_name(monthnumber));
      sethours(currentDate.getHours());
      setam_pm(ampm(hours));
      setminutes(currentDate.getMinutes());
      //msh bnset el year y3shan sybeno constat b value this year
      //el tany hwa el bytghyer 3la hasb el user mkhtar eh
      set_year_toset_theyear_value(currentDate.getFullYear());
      setdaymonth(currentDate.getDate());
      day_0_5 = currentDate.getDay();
      setweekdayName(getName(day_0_5));
    
    }
  }
  function cancelschedule() {
    ReactDOM.render(<App flag={1} />, document.getElementById("root"));
    setOpen(false);
    //msh hnghyer el tweet_time l2n lma n3mel cancel m3na en el flag_confrim b 1
    //=>flag=2 =>mfesh tweet htetsgel asln therfore msh mhtaga el information bt3etha
    setmonthnumber(currentDate.getMonth() + 1);
    setmonth(convert_monthnumber_to_name(monthnumber));
    sethours(currentDate.getHours());
    sethours_1_12(hours);
    setam_pm(ampm(hours));
    setminutes(currentDate.getMinutes());
    //msh bnset el year y3shan sybeno constat b value this year
    //el tany hwa el bytghyer 3la hasb el user mkhtar eh
    set_year_toset_theyear_value(currentDate.getFullYear());
    setdaymonth(currentDate.getDate() + 5);
    day_0_5 = currentDate.getDay();
    setday_0_5(day_0_5);
    setweekdayName(getName(day_0_5));
    flag_confirm = 0;
    setflag_confirm(flag_confirm);
  }

  function handleconfirm() {
    closeschedule();
    flag_confirm = 1;
    setflag_confirm(flag_confirm);
    ReactDOM.render(
      <App
        flag={2}
        weekdayName={weekdayName}
        month={month}
        date={daymonth}
        year={year_toset_theyear_value}
        time={time}
        minutes={minutes}
        hours={hours} //msh mhtgen hours mn 1 l 12 3shan dy hnsgel feha information msh htet3red momken a3red el time w khalas
        am_pm={am_pm}
      />,
      document.getElementById("root")
    );
  }

  function handlemonths(event) {
    /*monthnumber_tweet = event.target.value;
    setmonthnumber_tweet(month_tweet);
    month_tweet = convert_monthnumber_to_name(monthnumber_tweet);
    setmonth_tweet(month_tweet)*/
    monthnumber = event.target.value;
    if (
      monthnumber >= currentDate.getMonth() + 1 ||
      year_toset_theyear_value > currentDate.getFullYear()
    ) {
      setmonthnumber(monthnumber);
      month = convert_monthnumber_to_name(monthnumber);
      setmonth(month);
      console.log(month)
      if (
        monthnumber === "1" ||
        monthnumber === "3" ||
        monthnumber === "7" ||
        monthnumber === "8" ||
        monthnumber === "10" ||
        monthnumber === "12"
      ) {
        flagmonthdays = 1;
        set_flagmonthdays(flagmonthdays);
      } else if (
        monthnumber === "4" ||
        monthnumber === "6" ||
        monthnumber === "9" ||
        monthnumber === "11"
      ) {
        flagmonthdays = 2;
        set_flagmonthdays(flagmonthdays);
      } else if (monthnumber === "2") {
        flagmonthdays = 0;
        set_flagmonthdays(flagmonthdays);
      }
      setflag_schedule_validation_months(1);
    } else {
      setflag_schedule_validation_months(0);
    }
  }
  function handleminutes(event) {
    /*minutes_tweet = event.target.value;
    setminutes(minutes_tweet);*/
    minutes = event.target.value;
    setminutes(minutes);
    if (minutes < 10) {
      time = hours_1_12 + ": 0" + minutes;
    } else {
      time = hours_1_12 + ":" + minutes;
    }
    settime(time);
  }
  function handle_am_pm(event) {
    /*am_pm_tweet = event.target.value;
    setam_pm(am_pm_tweet);*/
    am_pm = event.target.value;
    setam_pm(am_pm);
  }

  function handleyears(event) {
    /* year_tweet = event.target.value;
    setyear_tweet(year_tweet);*/
    let value = event.target.value;
    if (value === "2022") {
      year_toset_theyear_value = year;
      set_year_toset_theyear_value(year_toset_theyear_value);
    }
    if (value === "2023") {
      year_toset_theyear_value = year + 1;
      set_year_toset_theyear_value(year_toset_theyear_value);
    }
    if (value === "2024") {
      year_toset_theyear_value = year + 2;
      set_year_toset_theyear_value(year_toset_theyear_value);
    }
  }

  function handledaymonth(event) {
    /*daynumber_tweet = event.target.value;
    setdaymonth(daynumber_tweet);*/
    daymonth = event.target.value;
    if (
      monthnumber == currentDate.getMonth() + 1 &&
      daymonth < currentDate.getDate() &&
      year_toset_theyear_value === currentDate.getFullYear()
    ) {
      setflag_schedule_validation_days(0);
    } else {
      setdaymonth(daymonth);
      setday_0_5(currentDate.getDay());
      setweekdayName(getName(day_0_5));
      setflag_schedule_validation_days(1);
    }
  }
  function handlehours(event) {
    /*hours_tweet = event.target.value;
    sethours(hours_tweet);*/
    hours_1_12 = event.target.value;
    sethours(hours_1_12);
    time = hours_1_12 + ":" + minutes;
    settime(time);
  }
  const openschedule = () => {
    if (
      props.flag_stop_working !== 1 &&
      props.flag_stop_working_from_poll_to_schedule !== 1
    )
     { setOpen(true);}
     else
     setOpen(false);
  };
  const openScheduleTweets_function = () => {
    setopenScheduledTweets(true);
  };
  function deleteScheduledTweets() {}
  function editScheduledTweets() {set_editScheduledTweets(1)}
  function handleScheduledTweets() 
  {
    if(props.scheduledtweets!==undefined)
    {
      set_showScheduledTweets(1)
    }
    else
    set_showScheduledTweets(0)
  }
  function handledraft() {}
  function backToSchedule() {
    setopenScheduledTweets(false);
  }
  return (
    <div>
      <input data-testid="Schedule-button"
        type="image"
        className={props.classname}
        src={props.img}
        alt=""
        onClick={openschedule}
      />
      {openScheduledTweets == 0 ? (
        <div className="schedule">
          <Modal open={Open} onClose={closeschedule} >
            <Box sx={style}>
            <CloseTwoToneIcon data-testid="close-button"
                  onClick={closeschedule}
                />
              <div className="first_div_schedule">
                
                <h3 className="scheduletittle"> Schedule </h3>

                {flag_confirm === 0 &&
                  flag_schedule_validation_months === 1 &&
                  flag_schedule_validation_days === 1 && (
                    <Button
                      variant="contained"
                      className="confirmbutton"
                      onClick={handleconfirm}
                      sx={confirmbutton_style}
                    >
                      {" "}
                      Confirm
                    </Button>
                  )}

                {flag_confirm === 1 && (
                  <div className="clear_update_cont">
                    <Button
                      variant="contained"
                      onClick={cancelschedule}
                      sx={clearbutton_style}
                    >
                      Clear
                    </Button>
                    {flag_schedule_validation_months === 1 &&
                      flag_schedule_validation_days === 1 && (
                        <Button
                          variant="contained"
                          className="updatebutton"
                          onClick={handleconfirm}
                          sx={updatebutton_style}
                        >
                          Update
                        </Button>
                      )}
                  </div>
                )}
              </div>
             

              <div className="date">
                <Box>
                  <FormControl sx={months_style}>
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native"
                    >
                      Month
                    </InputLabel>
                    <NativeSelect
                      defaultValue={monthnumber}
                      onClick={handlemonths}
                      inputProps={{
                        name: "month",
                      }}
                    >
                      <option value={1}>January</option>{" "}
                      <option value={2}>February</option>
                      <option value={3}>March</option>
                      <option value={4}>April</option>
                      <option value={5}>May</option>
                      <option value={6}>June</option>
                      <option value={7}>July</option>
                      <option value={8}>Augast</option>
                      <option value={9}>September</option>
                      <option value={10}>Octobar</option>
                      <option value={11}>Novamber</option>{" "}
                      <option value={12}>December</option>
                    </NativeSelect>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl sx={days_style}>
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native"
                    >
                      Day
                    </InputLabel>
                    <NativeSelect
                      defaultValue={daymonth}
                      onClick={handledaymonth}
                      inputProps={{
                        name: "day",
                      }}
                    >
                      <option value={1}>1</option> <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>{" "}
                      <option value={12}>12</option>
                      <option value={13}>13</option>{" "}
                      <option value={14}>14</option>{" "}
                      <option value={15}>15</option>
                      <option value={16}>16</option>{" "}
                      <option value={17}>17</option>{" "}
                      <option value={18}>18</option>
                      <option value={19}>19</option>{" "}
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                      <option value={25}>25</option>
                      <option value={26}>26</option>
                      <option value={27}>27</option>
                      <option value={28}>28 </option>
                      {(flagmonthdays === 2 || flagmonthdays === 1) && (
                        <option value={29}>29</option>
                      )}
                      {(flagmonthdays === 2 || flagmonthdays === 1) && (
                        <option value={30}>30</option>
                      )}
                      {flagmonthdays === 1 && <option value={31}>31</option>}
                    </NativeSelect>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl sx={years_style}>
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native"
                    >
                      year
                    </InputLabel>
                    <NativeSelect
                      onClick={handleyears}
                      defaultValue={year_toset_theyear_value}
                      inputProps={{
                        name: "year",
                      }}
                    >
                      <option value={year}>{year}</option>{" "}
                      <option value={year + 1}>{year + 1}</option>
                      <option value={year + 2}>{year + 2}</option>
                    </NativeSelect>
                  </FormControl>
                </Box>
              </div>


              <div className="time">
                <Box>
                  <FormControl sx={hours_style}>
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native"
                    >
                      Hours
                    </InputLabel>
                    <NativeSelect
                      defaultValue={hours_1_12}
                      onClick={handlehours}
                      inputProps={{
                        name: "hour",
                      }}
                    >
                      <option value={1}>1</option> <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>{" "}
                      <option value={12}>12</option>
                    </NativeSelect>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl sx={minutes_style}>
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native"
                    >
                      Minutes
                    </InputLabel>
                    <NativeSelect
                      defaultValue={minutes}
                      onClick={handleminutes}
                      inputProps={{
                        name: "Minute",
                      }}
                    >
                      <option value={1}>1</option> <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>{" "}
                      <option value={12}>12</option>
                      <option value={13}>13</option>{" "}
                      <option value={14}>14</option>{" "}
                      <option value={15}>15</option>
                      <option value={16}>16</option>{" "}
                      <option value={17}>17</option>{" "}
                      <option value={18}>18</option>
                      <option value={19}>19</option>{" "}
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                      <option value={25}>25</option>
                      <option value={26}>26</option>
                      <option value={27}>27</option>
                      <option value={28}>28 </option>{" "}
                      <option value={29}>29 </option>{" "}
                      <option value={30}>30 </option>
                      <option value={31}>31</option>{" "}
                      <option value={32}>32</option>
                      <option value={33}>33</option>
                      <option value={34}>34</option>
                      <option value={35}>35</option>
                      <option value={36}>36</option>
                      <option value={37}>37</option>
                      <option value={38}>38</option>
                      <option value={39}>39</option>
                      <option value={40}>40</option>
                      <option value={41}>41</option>{" "}
                      <option value={42}>42</option>
                      <option value={43}>43</option>{" "}
                      <option value={44}>44</option>{" "}
                      <option value={45}>45</option>
                      <option value={46}>46</option>{" "}
                      <option value={47}>47</option>{" "}
                      <option value={48}>48</option>
                      <option value={49}>49</option>
                      <option value={50}>50</option>
                      <option value={51}>51</option>{" "}
                      <option value={52}>52</option>
                      <option value={53}>53</option>{" "}
                      <option value={54}>54</option>{" "}
                      <option value={55}>55</option>
                      <option value={56}>56</option>{" "}
                      <option value={57}>57</option>{" "}
                      <option value={58}>58</option>
                      <option value={59}>59</option>{" "}
                      <option value={60}>60</option>
                    </NativeSelect>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl sx={am_pm_style}>
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native"
                    >
                      AM/PM
                    </InputLabel>
                    <NativeSelect
                      onClick={handle_am_pm}
                      defaultValue={am_pm}
                      inputProps={{
                        name: "am_pm",
                      }}
                    >
                      <option value={"am"}>am</option>{" "}
                      <option value={"pm"}>pm</option>
                    </NativeSelect>
                  </FormControl>
                </Box>
              </div>
              <div className="secound_div_cont">
                <CalendarMonthOutlinedIcon sx={calendericon_style} />
           

                  <div>
                  <h5 className="sendstatus">
                    {" "}
                    Will send on {weekdayName} , {month} {daymonth},{" "}
                    {year_toset_theyear_value} at {time} {am_pm}{" "}
                  </h5>
                  </div>
                 <h5 className="date_heading">Date</h5>
                 <h5 className="time_heading"> Time</h5>

                  <div>
                    <h5 className="timezone_heading"> Time zone</h5>
                    <h5 data-testid="Time-text" className="loaction_heading">
                      {" "}
                      Eastern European Standard Time{" "}
                    </h5>
                  </div>
                
                <Button
                  onClick={openScheduleTweets_function}
                  sx={{
                    transform: "lowercase",
                    marginTop:'4%',
                    width: "35%",
                
                  }}
                >
                  Scheduled Tweets
                </Button>
              </div>
            </Box>
          </Modal>
        </div>
      ) : null}
      {openScheduledTweets == 1 ? (
        <div>
          <Modal open={openScheduledTweets} onClose={closeschedule}>
            <Box sx={style1}>
              <div className="firstdiv">
                <ArrowBackIcon onClick={backToSchedule}></ArrowBackIcon>
                <h2 className="UnsendTweets_Heading">Unsent Tweets</h2>
                {/* hena el mfrod atcheck el awel fy tweets wla la <Button onClick={editScheduledTweets} sx={{marginLeft:'23%',  backgroundColor:"black",
                 color:"white",
                fontSize: "95%",
                "&:hover": {
                background: "rgb(52, 48, 48)"}}>Edit</Button>*/}
              </div>
              {/** imp =>mapping functions for the scheduled tweets*/}
              <div className="secounddiv">
                {/* el div kolo shghel lma mykonsh fy tweets bs */}
                <Box sx={{style1}}>
                  <Tabs >
                    <Tab label="Drafts" sx={{marginLeft:'-10%'}} onClick={handledraft}/>
                    <Tab sx={{width:'40%' ,marginLeft:'5%'}} label="scheduled tweets" onClick={handleScheduledTweets}  />
                  </Tabs>
                </Box>
               {showScheduledTweets===0 &&
                 <div>
                   <img
                  className="scheduledtweets_background"
                  src="https://abs.twimg.com/sticky/illustrations/empty-states/alarm-clock-800x400.v1.png"
                  alt=""
                />
                <h1 className="heading1">Hold that thought</h1>
                <h3 className="heading2_part1">
                  Not ready to send a Tweet just yet? Save it to your
                </h3>
                <h3 className="heading2_part2">
                  drafts or schedule it for later
                </h3>
            
              </div> }
              {console.log(showScheduledTweets)}
              {
                showScheduledTweets===1 && <div>
                {props.scheduledtweets.map(function showstweets()
                {
                  return <div>
                    <CalendarMonthOutlinedIcon />
                    <h3>  Will send on {props.scheduledtweets.weekdayName} , {props.scheduledtweets.month} {props.scheduledtweets.date},{props.scheduledtweets.year} at {props.scheduledtweets.time} {props.scheduledtweets.am_pm}{" "}</h3>
                  <p>{props.scheduledtweets.content}</p>
                  </div>
                })}
                </div>
              }
            </div> 

            </Box>
          </Modal>
        </div>
      ) : null}
    </div>
  );
}
export default IconSchedule;
