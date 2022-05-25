import React, { useState } from "react";
import "./Search.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function SearchFilter(props) {
  const [tabsvalue, settabsvalue] = useState(1);
  const [flag, setflag] = useState(1);
  return (
    <div className="searchFilter">
      <Tabs value={props.tabsvalue} variant="fullWidth" onClick={props.handlesearch}>
        <Tab
          value={1}
          onClick={() => props.settabsvalue(1)}
          label="Top"
          style={{ textTransform: "none", fontSize: "100%" }}
        />
        <Tab
          value={2}
          onClick={() => props.settabsvalue(2)}
          label="Latest"
          style={{ textTransform: "none", fontSize: "100%" }}
        />
        <Tab
          value={3}
          onClick={() => props.settabsvalue(3)}
          label="People"
          style={{ textTransform: "none", fontSize: "100%" }}
        />
        <Tab
          value={4}
          onClick={() => props.settabsvalue(4)}
          label="Photos"
          style={{ textTransform: "none", fontSize: "100%" }}
        />
        </Tabs>
    </div>
  );
}

export default SearchFilter;
