import React from "react";
import "./Notifications.css";
import "../Layout.css";
import SideBar from "../SideBar/SideBar";
import NotificationsHeader from "./NotificationsHeader";
import FollowNotif from "./FollowNotif";
import BlockNotif from "./BlockNotif";
import TweetNotif from "./TweetNotif";
import LikeNotif from "./LikeNotif";
import EmptyNotifications from "./EmptyNotifications";
import getNotifications from "./Notifsdb";
import axios from "axios";

function Notifications() {
  //-----test--------//
  const [Notif, setNotifs] = React.useState([]);
  const [wait, setWait] = React.useState(true);

  const [empty, setEmpty] = React.useState(Notif.length === 0 ? true : false);
  React.useEffect(() => {
    (async () => {
      const resp = await getNotifications();
      for (let i = 0; i < resp.length; i++) {
        await axios.patch("http://localhost:3001/Notifications/" + resp[i].id, {
          status: "old",
        });
      }
      setNotifs(resp);
      if (resp.length === 0) {
        setWait(false);
      } else setEmpty(false);
    })();
  }, []);

  console.log(Notif);

  //-----------------//

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

  //---------mapping function-------//
  function mapNotifications(Notif) {
    if (Notif.type === 1) {
      return <BlockNotif blockDays={Notif.blockDays} />;
    } else if (Notif.type === 2) {
      return (
        <TweetNotif
          userName={Notif.userName}
          profilePic={Notif.profilePic}
          tweetText={Notif.tweetText}
        />
      );
    } else if (Notif.type === 3) {
      return (
        <LikeNotif
          userName={Notif.userName}
          profilePic={Notif.profilePic}
          tweetText={Notif.tweetText}
        />
      );
    } else {
      return (
        <FollowNotif userName={Notif.userName} profilePic={Notif.profilePic} />
      );
    }
  }
  //--------------------------------//
  return (
    <div className="layout">
      <SideBar />
      <div className="feeder">
        <NotificationsHeader />
        {empty === true && wait === false && <EmptyNotifications />}
        {empty === false && Notif.map(mapNotifications)}
      </div>
      <div className="widgets">
        <div className="search">search</div>
        <div className="whatsHappening">what's happening</div>
        <div className="whoToFollow">who to follow</div>
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
