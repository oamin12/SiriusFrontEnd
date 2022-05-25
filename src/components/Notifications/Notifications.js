import React from "react";
import "./Notifications.css";
import "../Layout.css";
import SideBar from "../SideBar/SideBar";
import NotificationsHeader from "./NotificationsHeader";
import FollowNotif from "./FollowNotif";
import BlockNotif from "./BlockNotif";
import TagNotif from "./TagNotif";
import LikeNotif from "./LikeNotif";
import RetweetNotif from "./RetweetNotif";
import ReplyNotif from "./ReplyNotif";
import EmptyNotifications from "./EmptyNotifications";
import VoteNotif from "./VoteNotif";
import getNotifications from "./Notifsdb";
import QuoteRetweetNotif from "./quoteRetweet";
import WhatsHappening from "../WhatsHappening/WhatsHappening";
import axios from "axios";
import WhoToFollow from "../WhoToFollow/WhoToFollow"
import SearchBox from "../Search/SearchBox";

var token = sessionStorage.getItem("tokenValue");
function Notifications() {
  //-----test--------//
  const [Notif, setNotifs] = React.useState([]);
  const [wait, setWait] = React.useState(true);

  const [empty, setEmpty] = React.useState(Notif.length === 0 ? true : false);
  React.useEffect(() => {
    (async () => {
      var config = {
        method: "patch",
        headers: { Authorization: "Bearer " + token },
      };
      const resp = await getNotifications();
      for (let i = 0; i < resp.notificationsArray.length; i++) {
        await axios.patch(
          "http://34.236.108.123:3000/home/" +
            resp.notificationsArray[i].notificationId +
            "/patchNotification",
          {},
          config
        );
      }
      setNotifs(resp.notificationsArray);
      if (resp.notificationsArray.length === 0) {
        setWait(false);
      } else setEmpty(false);
    })();
  }, []);

  //-----------------//

  //---------mapping function-------//
  function mapNotifications(Notif) {
    if (Notif.activity === "block") {
      return <BlockNotif blockDays={Notif.blockDays} />;
    } else if (Notif.activity === "tag") {
      return (
        <TagNotif
          id={Notif.tweetId}
          userName={Notif.sender}
          notifText={Notif.mainString}
          image={Notif.imageSender}
        />
      );
    } else if (Notif.activity === "like") {
      return (
        <LikeNotif
          id={Notif.tweetId}
          userName={Notif.sender}
          notifText={Notif.mainString}
          image={Notif.imageSender}
        />
      );
    } else if (Notif.activity === "retweet") {
      return (
        <RetweetNotif
          id={Notif.tweetId}
          userName={Notif.sender}
          notifText={Notif.mainString}
          image={Notif.imageSender}
        />
      );
    } else if (Notif.activity === "vote") {
      return (
        <VoteNotif
          id={Notif.tweetId}
          userName={Notif.sender}
          notifText={Notif.mainString}
          image={Notif.imageSender}
        />
      );
    } else if (Notif.activity === "reply") {
      return (
        <ReplyNotif
          id={Notif.tweetId}
          userName={Notif.sender}
          notifText={Notif.mainString}
          image={Notif.imageSender}
        />
      );
    } else if (Notif.activity === "follow") {
      return (
        <FollowNotif
          userName={Notif.sender}
          notifText={Notif.mainString}
          image={Notif.imageSender}
        />
      );
    } else if (Notif.activity === "quoteRetweet") {
      return (
        <QuoteRetweetNotif
          id={Notif.tweetId}
          userName={Notif.sender}
          notifText={Notif.mainString}
          image={Notif.imageSender}
        />
      );
    }
  }
  //--------------------------------//
  //-----------WHATSHAPPENING----------//
const [trendsInfo,setTrendsInfo]=React.useState([]);
var config2 = {
  method: "get",
  url: "http://34.236.108.123:3000/explore",
  headers: { Authorization: "Bearer " + token },
};
async function GetTrendsInfo() {
  let response = "";
  try {
    response = await axios
      .get("http://34.236.108.123:3000/explore", config2)
      .then((res) => res.data);
    //console.log(response.tweetData);
    setTrendsInfo(response.hashtags);

    return response.hashtags;
  } catch (error) {
    if (error.response) {
      return error.response;
    }
  }

  return response;
}
React.useEffect(() => {
  (async () => {
    const resp = await GetTrendsInfo();
    setTrendsInfo(resp);
  })();
}, []);
  //------------------------------------//
  return (
    <div className="layout">
      <SideBar />
      <div className="feeder">
        <NotificationsHeader />
        {empty === true && wait === false && <EmptyNotifications />}
        {empty === false && Notif.map(mapNotifications)}
      </div>
      <div className="widgets">
      <div className="search">
        <SearchBox size="40"/>
        </div>
        <div className="whatsHappening">
          <WhatsHappening WhatsHappening={trendsInfo}/>
        </div> 
        <div className="whoToFollow"><WhoToFollow></WhoToFollow></div>
      </div>
    </div>
  );
}

export default Notifications;
/* for (let i = 0; i < resp.length; i++) {
          await axios.patch(
            "http://localhost:3001/Notifications/" + resp[i].id,
            {
              status: "old",
            }
          );
        }*/

/*
  {
      "id": 1,
      "sender": "user6",
      "receiver": "user0",
      "activity": "follow",
      "tweetId": "6284d3df0ae56f80a9e9b098",
      "mainString": "Started following you",
      "createdAt": "2022-05-18T11:09:20.078Z",
      "status": "old"
    },
    {
      "id": 2,
      "sender": "user6",
      "receiver": "user0",
      "activity": "retweet",
      "tweetId": "6284d3df0ae56f80a9e9b098",
      "mainString": "Retweeted your tweet",
      "createdAt": "2022-05-18T11:09:20.078Z",
      "status": "old"
    },
    {
      "id": 3,
      "sender": "user6",
      "receiver": "user0",
      "activity": "like",
      "tweetId": "6284d3df0ae56f80a9e9b098",
      "mainString": "This is the Liked tweet",
      "createdAt": "2022-05-18T11:09:20.078Z",
      "status": "old"
    },
    {
      "id": 4,
      "sender": "user6",
      "receiver": "user0",
      "activity": "reply",
      "tweetId": "6284d3df0ae56f80a9e9b098",
      "mainString": "this is the main tweet",
      "reply": "This is the replied tweet",
      "createdAt": "2022-05-18T11:09:20.078Z",
      "status": "old"
    },
    {
      "id": 5,
      "sender": "user6",
      "receiver": "user0",
      "activity": "quoteRetweet",
      "tweetId": "6284d3df0ae56f80a9e9b098",
      "mainString": "This is the main tweet",
      "subString": "This is the quote retweet",
      "createdAt": "2022-05-18T11:09:20.078Z",
      "status": "old"
    },
    {
      "id": 6,
      "sender": "user6",
      "receiver": "user0",
      "activity": "vote",
      "tweetId": "6284d3df0ae56f80a9e9b098",
      "mainString": "user6 voted for agaza",
      "createdAt": "2022-05-18T11:09:20.078Z",
      "status": "old"
    }
*/
/*function popNotifs(Notifs) {
    for (let i = 0; i < Notifs.length; i++) {
      if (Notifs[i].status === "new") {
        if (Notifs[i].type === 1)
          NotificationManager.error(
            "This user will be banned for " + Notifs[i].blockDays + " days",
            "Blocked"
          );
        else if (Notifs[i].type === 2)
          NotificationManager.info(
            Notifs[i].tweetText,
            Notifs[i].userName + " posted a new tweet."
          );
        else if (Notifs[i].type === 3)
          NotificationManager.info(
            Notifs[i].tweetText,
            Notifs[i].userName + " liked your tweet."
          );
        else if (Notifs[i].type === 4)
          NotificationManager.info(
            Notifs[i].userName + " started following you"
          );
      } else break;
    }
  }
  */

//popNotifs(Notif);
