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
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import axios from "axios";


let RandomReacentSerach = ["f", "bassant", "sohad", "t", "software"];
// var token=localStorage.getItem("tokenValue");
//  console.log('dah el token ',localStorage.getItem("tokenValue"));
// var config = {
//   method: 'get',
//   url: 'http://34.236.108.123:3000/home/',
//   headers: {Authorization:"Bearer "+token}
// };


const filter = createFilterOptions();


 


function deletesearch(event)
  {
    people.filter()
  }
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
      {/* <CloseTwoToneIcon sx={cancelButton} onClick={deletesearch}/> */}
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
      {/* <CloseTwoToneIcon sx={cancelButton} onClick={deletesearch}/> */}
    </div>
  );
}
function SearchBox(props) {
  const [searchresults,setsearchresults ] = React.useState([]);
  const [recentserach,setrecentsearch] = React.useState([]);

//   async function GetTweetInfo() 
//  {
//    let response = '';
//    try {
//      response = await axios.get('http://34.236.108.123:3000/home/',config).then((res) => res.data);
//      console.log('herererer',response.userName);
//      localStorage.setItem("UserName",response.userName);
//      setsearchresults(response.data);
//      return (response.data);
//    } catch (error) {
//      if (error.response) {
//        return (error.response);
//      }
//    }
//    return (response);
//  }



//   function handleAddTweet(){
//     setAddedTweet(true);
//   };
  
//   React.useEffect(() => {
//     (async () => {
//       const resp = await GetTweetInfo();
//       setTweetsInfo(resp);
//     })();
//   }, []);

//   if (addedTweet===true)
//   {
//     (async () => {
//       const resp = await GetTweetInfo();
//       setTweetsInfo(resp);
//       setAddedTweet(false);
//       //console.log(resp);
//     })();  }


  const [isClicked, setMouseOver] = useState(false);
  const [OpenSearch, setOpenSearch] = useState(false);
  const [mouseLoc, setmouseLoc] = useState(0);
  const [readonly, setreadonly] = useState(false);
  const [notcloseSearchMenu, setnotcloseSearchMenu] = useState(false);
  const [value, setValue] = React.useState(null);
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
    //delte w get request frpom the ----------backend-----------------
    // people.filter(function(value,index,array){
    //   return (index===-1)
    // })
    //clear all the search history=>the information from the backend
  }
  
  function Move(event) {}
  function handletyping(event, newValue)
  {
      if (typeof newValue === 'string') {
        setValue({
          title: newValue,
        });
      } else if (newValue && newValue.inputValue) {
        // Create a new value from the user input
        setValue({
          title: newValue.inputValue,
        });
      } else {
        setValue(newValue);
      }
  }
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
          {/* <Button onClick={handleclearall} sx={clearall}>
            Clear all
          </Button> */}
        </div>
        {RandomReacentSerach.map(createSearchResults)}
        {people.map(createCard)}
      </Menu> 

      
    {/* <Autocomplete
      value={value}
      onChange={handletyping}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue === option.title);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            title: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      handleHomeEndKeys
      className="SearchBox"
      options={RandomReacentSerach}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.title;
      }}
      renderOption={(props, option) =>   
      <div> 
         <NavLink to="/search" style={{ color: "black" }}> 
           <li {...props}>{option.title}</li> 
        </NavLink> 
      </div>  }
      sx={{ width: '450%',borderRaduis:'20px' }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Search"  sx={{ width: '140%' ,borderRaduis:'20px'}} />
      )}
    /> */}

    </div>
  );
}

export default SearchBox;
