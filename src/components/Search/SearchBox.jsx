import React, { useState } from "react";
import "./Search.css";
import SearchIcon from '@mui/icons-material/Search';

function SearchBox() {
  const [isClicked, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }


  return (
    <div className="searchContainer">
    <div className="searchIcon">
      <SearchIcon color="disabled" fontSize="small" />  
    </div>
    <input 
      className="searchBox" 
      type="text" 
      placeholder="Search Twitter" 
      size="40" 
      style={{ borderWidth: isClicked ? "thick" : "none" }}
      onFocus={handleMouseOver}
    />
    </div>
  );
}

export default SearchBox;