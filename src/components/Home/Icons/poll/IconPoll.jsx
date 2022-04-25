import React from "react";
import "./poll.css";
import App from "../../../App";
import ReactDOM from "react-dom";

function IconPoll(props) {
  let [flag1, setflag1] = React.useState(0);
  function createpoll() { //the function that is responsible to change the flag that will hide the text box and create the poll
  if(props.flag_stop_working!==1)
  {  flag1 = 1;   
     setflag1(flag1);
  }
  }
  return (
    <div>
      <input
        type="image"
        className={props.classname}
        src={props.img}
        alt=""
        onClick={createpoll}
      />
      {flag1 === 1 && (ReactDOM.render(<App flag={0} flag_stop_working_from_poll_to_schedule={true}/>, document.getElementById("root")))}
    </div>
  );
}
export default IconPoll;
