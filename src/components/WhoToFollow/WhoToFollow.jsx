import React from "react";
import Card from "../Search/Card";
import { Button_showmore } from "./WhoToFollow_style";
import people from "../Search/people";
import { NavLink } from "react-router-dom";

function gotoprofile() {}
function createCard(contact, index) {
  if (index < 3) {
    return (
      <Card
        key={contact.id}
        name={contact.name}
        username={contact.username}
        bio={contact.bio}
        img={contact.imgURL}
        style={{ marginLeft: "-2%" }}
        followbutton={true}
        styling={{ padding: "5% 30% 5% 30%", marginTop: "8%" }}
      />
    );
  }
}
function WhoToFollow(props) {
  return (
    <div className="whotofollow">
      <h3 className="whotofollow_heading"> Who to follow</h3>
      {people.map(createCard)}
      <NavLink to="/whotofollow" style={Button_showmore}>
        {" "}
        Show more{" "}
      </NavLink>
    </div>
  );
}
export default WhoToFollow;
