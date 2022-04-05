import React, { useState } from "react";
import "./Search.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function SearchFilter() {
  return (
    <div className= "searchFilter">

      <Tabs variant="fullWidth">
            <Tab label="Top" />
            <Tab label="Latest" />
            <Tab label="People" />
            <Tab label="Photos" />
            <Tab label="Videos" />
      </Tabs>
     
    </div>
  );
}

export default SearchFilter;