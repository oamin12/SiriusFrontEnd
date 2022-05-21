import React from "react";
import "./EmptyNotifications.css";
import { NavLink } from "react-router-dom";
function EmptyNotifications(props) {
  return (
    <div className="EmptyNotif">
      <h1 className="EmptyNotifHeader">Nothing to see here — yet</h1>
      <p className="EmptyNotifText">
        From likes to Retweets and a whole lot more, this is where all the
        action happens.
      </p>
    </div>
  );
}
export default EmptyNotifications;
//23mly src elavatar
