import React from "react";
import Poll from "./Poll";
import "./poll.css";
import "../../index.css";
import Home from "../../Home";
import Inputtext from "../../constants/Inputtext";
import PostingTweet from "../../PostingTweet";
import App from "../../../App";
import ReactDOM from "react-dom";

function IconPoll(props) {
  let [flag1, setflag1] = React.useState(0);
  function createpoll() { //the function that is responsible to change the flag that will hide the text box and create the poll
    flag1 = 1;   
    setflag1(flag1);
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
      {flag1 === 1 && (ReactDOM.render(<App flag={0}/>, document.getElementById("root")))}
    </div>
  );
}
export default IconPoll;
