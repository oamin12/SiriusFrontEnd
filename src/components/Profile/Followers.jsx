import React from "react";
// import "./Settings.css";
import Card from "../Search/Card.jsx";
import people from "../Search/people";
import "../Layout.css"
import SideBar from "../SideBar/SideBar";

function createCard(contact) {
    return (
      <Card
        key={contact.id}
        name={contact.name}
        username={contact.username}
        bio={contact.bio}
        img={contact.imgURL}
      />
    );
  }
  
function Followers() {
  return (
    <div className="layout">
      <SideBar />
      <div className="feeder">{people.map(createCard)}</div>
      <div className="widgets">
        <div className="search">search</div>
        <div className="whatsHappening">what's happening</div>
        <div className="whoToFollow">who to follow</div>
      </div>
    </div>
  );
}

export default Followers;
