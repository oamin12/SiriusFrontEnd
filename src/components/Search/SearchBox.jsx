import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { clearall } from "./Search_Style";
import { header_recent } from "./Search_Style";
import { MenuStyle } from "./Search_Style";
import { cancelButton } from "./Search_Style";
import Card from "./Card";
import people from "./people";
import { NavLink } from "react-router-dom";
let RandomReacentSerach = ["f", "bassant", "sohad", "t", "software"];
function createCard(contact) {
  return (
    <div style={{ display: "flex" }}>
      <MenuItem sx={{ height: "110px" }}>
        <Card
          key={contact.id}
          name={contact.name}
          username={contact.username}
          bio={contact.bio}
          img={contact.imgURL}
          followbutton={false}
          sx={{ marginLeft: "-2%", width: "90px" }}
        />
      </MenuItem>
      <CloseTwoToneIcon sx={cancelButton} />
    </div>
  );
}
function createSearchResults(result) {
  return (
    <div style={{ display: "flex" }}>
      <SearchIcon
        fontSize="medium"
        sx={{ marginTop: "6%", marginLeft: "4%" }}
      />
      <NavLink to="/search" style={{ color: "black" }}>
        <MenuItem sx={{ height: "60px" }}>{result}</MenuItem>
      </NavLink>
      <CloseTwoToneIcon sx={cancelButton} />
    </div>
  );
}
function SearchBox(props) {
  const [isClicked, setMouseOver] = useState(false);
  const [OpenSearch, setOpenSearch] = useState(false);
  const [mouseLoc, setmouseLoc] = useState(0);
  const [readonly, setreadonly] = useState(false);
  const [notcloseSearchMenu, setnotcloseSearchMenu] = useState(false);

  function OpenSearchMenu() {
    setMouseOver(true);
    setOpenSearch(true);
    setnotcloseSearchMenu(true);
  }
  function closeSearch(event) {
    event.stopPropagation();
    if (notcloseSearchMenu) {
      setOpenSearch(false);
    }
  }
  function handleclearall() {
    console.log("clear");
    //clear all the search history=>the information from the backend
  }
  function Move(event) {}
  return (
    <div className="searchContainer">
      <SearchIcon className="searchIcon" fontSize="small" />
      <input
        className="searchBox"
        type="text"
        placeholder="Search Twitter"
        size={props.size}
        onClick={OpenSearchMenu}
        onChange={OpenSearchMenu}
        readOnly={readonly}
      />
      <Menu
        id="basic-menu"
        open={OpenSearch}
        anchorEl={OpenSearch}
        onClose={closeSearch}
        sx={props.styling}
      >
        <div style={{ display: "flex" }}>
          <h2 style={header_recent}>Recent</h2>
          <Button onClick={handleclearall} sx={clearall}>
            Clear all
          </Button>
        </div>
        {RandomReacentSerach.map(createSearchResults)}
        {people.map(createCard)}
      </Menu>
    </div>
  );
}

export default SearchBox;
