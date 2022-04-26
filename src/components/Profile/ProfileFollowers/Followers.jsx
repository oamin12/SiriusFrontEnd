import React from "react";
import FollowTab from "../ProfileFollowing/FollowTab.jsx";
import FollowerCard from "./FollowerCard.jsx";
import people from "../../Search/people";
import "../../Layout.css";
import SideBar from "../../SideBar/SideBar";

function createCard(contact) {
    return (
      <FollowerCard
        key={contact.id}
        name={contact.name}
        username={contact.username}
        bio={contact.bio}
        img={contact.imgURL}
      />
    );
  }
  /**
   * @description page of all followers of a user
   * @returns {div}
   */
function Followers() {
  return (
    <div className="layout">
      <SideBar />
      <div className="feeder">
      <FollowTab
        name={localStorage.getItem("TopName")}
        username={localStorage.getItem("UserProfile")}

       />
      {people.map(createCard)}</div>
      <div className="widgets">
        <div className="search">search</div>
        <div className="whatsHappening">what's happening</div>
        <div className="whoToFollow">who to follow</div>
      </div>
    </div>
  );
}

export default Followers;
