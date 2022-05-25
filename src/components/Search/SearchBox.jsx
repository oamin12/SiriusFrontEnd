import "./Search.css";
import Card from "./Card";
import { NavLink } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import axios from "axios";
import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";



function SearchBox(props) {
  const [searchresults, setsearchresults] = React.useState([]);
  const [value1, setValue] = React.useState("");
  const [addedTweet, setAddedTweet] = React.useState(false);
  const [openSearch, setopenSearch] = React.useState(false);

  function createCard(contact) {
    return (
      <div style={{ marginLeft: "5%", marginTop: "5%",width:"100%" }}>
        <Card
          key={contact.id}
          name={contact.name}
          username={contact.username}
          followbutton={false}
          img={contact.image}
          bio={contact.bio}
        />
      </div>
    );
  }

  function handleAddTweet() {
    setAddedTweet(true);
  }

  //   if (addedTweet===true)
  //   {
  //     (async () => {
  //       const resp = await GetTweetInfo();
  //       setTweetsInfo(resp);
  //       setAddedTweet(false);
  //       //console.log(resp);
  //     })();  }

  async function GetTweetInfo(value1) {
    let response = "";
    try {
      response = await axios
        .get("http://34.236.108.123:3000/search?q=" + value1 + "&f", {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => res.data);
      console.log("herererer", response.username);
      //localStorage.setItem("UserName",response.data);
      setsearchresults(response.users);
      return response.users;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
    return response;
  }

  // React.useEffect(() => {
  //   (async () => {
  //     const resp = await GetTweetInfo();
  //     setsearchresults(resp);
  //   })();
  // });

  // if (addedTweet === true) {
  //   (async () => {
  //     const resp = await GetTweetInfo();
  //     setsearchresults(resp);
  //     //console.log(resp);
  //   })();
  // }

  var token = sessionStorage.getItem("tokenValue");
  // console.log("dah el token ", localStorage.getItem("tokenValue"));
  var config = {
    method: "get",
    url: "http://34.236.108.123:3000/search?q=" + value1 + "&f",
    headers: { Authorization: "Bearer " + token },
  };

  function handleEnter(event) {
    if (event.key === "Enter") {
      props.setvalue(value1);
    }
  }
  function handletyping(event) {
    setopenSearch(true);
    let value1 = event.target.value;
    setValue(value1);
    GetTweetInfo(value1);
    if(props.value1!==undefined)
    props.setvalue(value1);
    // if (typeof event.target.value === "string") {
    //   setValue({
    //     title: event.target.value,
    //   });
    // } else if (event.target.value && event.target.value.inputValue) {
    //   // Create a new value from the user input
    //   setValue({
    //     title: event.target.value.inputValue,
    //   });
    // } else {
    //   setValue(event.target.value);
    // }
  }
  function closesearch(event)
  {
console.log(event.clientX)
console.log(event.clientY)
if(!(event.clientX>22 && event.clientX<27 && event.clientY<350))
{
  setopenSearch(false)
}
  }
  return (
    <div className="searchContainer" onClick={closesearch}>
      <input
        type="search"
        placeholder="search"
        className="searchBox"
        onChange={handletyping}
        onKeyPress={handleEnter}
        
      ></input>
      {openSearch === true && (
        <div className="dropdownsearch">
          <NavLink to="/search" style={{ color: "black" }}>
            <input
              type="text"
              size={40}
              value={value1}
              readOnly={true}
              style={{
                height: "120%",
                border: "none",
                flexWrap: "wrap",
                display: 'flex',
    maxWidth: '600px',
    pagebreakInside: 'auto',
    gap: '3px',
                marginLeft: "10%",
                "&placeholder": { fontSize: "10px" },
              }}
            ></input>
          </NavLink>
          {searchresults.map(createCard)}
        </div>
      )}
    </div>
  );
}

export default SearchBox;
