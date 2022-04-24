import React from "react";
import FollowTab from "./FollowTab.jsx";
import FollowingCard from "./FollowingCard.jsx";
import people from "../../Search/people";
import "../../Layout.css";
import SideBar from "../../SideBar/SideBar";

function createCard(contact) {
    return (
      <FollowingCard
        key={contact.id}
        name={contact.name}
        username={contact.username}
        bio={contact.bio}
        img={contact.imgURL}
      />
    );
  }
  
function Followings() {
  return (
    <div className="layout">
      <SideBar />
      <div className="feeder">
      <FollowTab
        name="Ziad Ahmed"
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

export default Followings;
