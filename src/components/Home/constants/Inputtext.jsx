import React from "react";
import App from "../../App"
import ReactDOM from "react-dom";
import Tweet from "./tweet2.png"
import Tweetblur from "./tweet1.png"
import tweets from "../Tweets.js"
import axios from "axios";
var token=localStorage.getItem("tokenValue");

function Inputtext(props)
{
    let [flag2,setflag2]=React.useState(0); 
    let [flag3,setflag3]=React.useState(0);
    let [img,setimg]=React.useState(Tweetblur);
    let [text,settext]=React.useState("");

    
     function handlechangeT()  //reset the textbox,post the tweet
    {
     
      if(flag2===1)   
      {
        tweets.unshift({id:4,name:"Remonda",userName:"Remonda_95",content:text,avatar:"",image:"",likeCount:0,repliesCount:0,retweetCount:0})
        var data = '{"body":'+text+',"media": []}';
        var config = {
          method: 'post',
          url: '34.236.108.123:3000/compose-tweet',
          headers: {Authorization:"Bearer "+token},
          data:data
        };
        
        async function PostTweet() {
          let response = '';
          try {
            response = await axios.post('http://34.236.108.123:3000/home/compose-tweet',{body:text,media: []},{headers: {Authorization:"Bearer "+token}}).then((res) => res.data);
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
            
        console.log(tweets)
        text=""
        settext(text);
      setimg(Tweetblur);
      }
    }

    function handleChange(event) //check on the length of the text if >280 then change the tweet img 
    {
       text=event.target.value;
       if(text.length===0 || text.length>280 )  
       {
        flag2=0;
        setflag2(0);
        img=Tweetblur;
        setimg(img);
        settext(text);
        
       }
       else if(280>=text.length)
       {
      
           flag2=1;
           setflag2(1);
           settext(text);
           img=Tweet;
           setimg(img);
         
       }
    }
   flag3=props.flag2; //flag that is resposible to hide or show the text box
   if(flag3!==0 && flag3!== 1 )  // at the begining of the app the flag value is garbbige so if it is not 0 or one we will put it 1=>the text box should be showed 
   { 
     flag3=1
   }


    return (
    <div>

     { flag3===1 ?   <div>
       <textarea className="inputtext"
       type="textbox" 
       size="50"
       value={text}
       placeholder={props.msg}
       onChange={handleChange}
       />
       { 
       <input
       className={props.classname}
       type="image" 
       src={img}
       alt=""
       onClick={handlechangeT}
       />
       } </div> :null}
    </div>
    );

}

export default Inputtext;