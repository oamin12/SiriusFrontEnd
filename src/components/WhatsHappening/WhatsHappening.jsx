import React from "react";
import Card from "../Search/Card";
import people from "../Search/people";
import { NavLink } from "react-router-dom";
import "./WhatsHappening.css";
import Trend from "../Explore/Trend";


function CreateTrends(Trends) {
    return (
      <Trend
        id={Trends.id}
        number={Trends.number}
        type={Trends.type}
        name={Trends.name}
        tweets_num={Trends.tweets_num}
      />
    );
  }
function WhatsHappening(props) {
  return (
    <div className="WhatsHappening">
      <h3 className="WhatsHappening_heading"> What's Happening</h3>
      {props.WhatsHappening.map(CreateTrends)}
      <NavLink to="/explore" className={"Seemore_wtshpn"}>
        {" "}
        Show more{" "}
      </NavLink>
    </div>
  );
}
export default WhatsHappening;
