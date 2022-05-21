import React from "react";
import "../Layout.css";
import SideBar from "../SideBar/SideBar";
import Heading from "../Home/constants/Heading";
import { NavLink } from "react-router-dom";
import SearchBox from "../Search/SearchBox";
import WhoToFollow from "../WhoToFollow/WhoToFollow";
import "../WhoToFollow/WhoToFollow.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Card from "../Search/Card";
import people from "../Search/people";

function createCard(contact, index) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      username={contact.username}
      bio={contact.bio}
      img={contact.imgURL}
      styling={{ padding: "3% 15% 3% 15%", marginTop: "8%", marginLeft: "60%" }}
      followbutton={true}
    />
  );
}

function ShowMoreOFWhoToFollow(props) {
  return (
    <div>
      <div className="layout">
        <SideBar flag_tweet_popuppage={props.flag_tweet_popuppage} />
        <div className="feeder">
          <div className="cont1">
            <NavLink to="/home">
              <ArrowBackIcon sx={{ marginTop: "2%", color: "black" }} />
            </NavLink>
            <Heading classname="connect_heading" title="Connect" />
          </div>
          <h3 className="Suggested_heading"> Suggested for you </h3>
          {people.map(createCard)}
        </div>

        <div className="widgets">
          <div className="search">
            <NavLink to="/search">
              <SearchBox size="40" />
            </NavLink>
          </div>
          <NavLink to="/signin">
            <div className="whatsHappening">what's happening</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default ShowMoreOFWhoToFollow;
