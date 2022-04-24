import React from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchBox from "./SearchBox";
import Card from "./Card";
import people from "./people";
import "./Search.css";
import SearchFilter from "./SearchFilter";
import { NavLink } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import "../Layout.css";

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


function SearchPage() {
    return (

        <div className="searchPage">
        <div className="searchTop">
        <div className="arrowBack">
        <NavLink to="/home">
            <ArrowBackIcon fontSize="small" />
        </NavLink>
        </div>
        <SearchBox size="40"/>
    
        <div className="moreOptions">
            <MoreHorizIcon fontSize="small"/>
        </div> 

        </div>
            <SearchFilter />
            {people.map(createCard)}
        </div>
    );
  }

  function Search() {
    return (
      <div className="layout">
        <SideBar/>
        <div className="feeder">
        <SearchPage />
        </div>
        <div className="widgets">
          <div className="search">search</div>
          <div className="whatsHappening">what's happening</div>
          <div className="whoToFollow">who to follow</div>
        </div>
      </div>
    );
  }


  export default Search;