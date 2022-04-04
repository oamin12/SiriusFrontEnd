import React from "react";
import Inputtext from "../Inputtext";

//to be deleted
function TweetButton(props)
{
   let [text,settext]=React.useState("");
    function handleChangeT(event)
    {
       <Inputtext flag={1}/>
    }
    return(
        <div >
        <input 
        type="image" 
        className={props.classname}
        src={props.img} 
        onClick={handleChangeT}
        alt=""/>
   </div>);
}

export default TweetButton