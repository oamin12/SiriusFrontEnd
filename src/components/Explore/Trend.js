import React from "react";
import "../Layout.css";
import "./Trend.css";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { useState } from "react";
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';

/**
 * 
 * @param {object} props number, type, name, tweets_num
 * @description Component that contains the header of trend and trend settings button
 * @returns A div that renders the component
 */ 
function Trend(props) {
    const [open, setOpen] = useState(null);

  function handleSettings(event) {
    setOpen(event.currentTarget);
    
  }

  function handleClose() {
    setOpen(null);
    
  }
 return (
    <div className="trend_head">
        <div className="trend_data">
            <p className="trend_name">{props.number}. {props.type}. Trending</p>
            <p className="trend_hash">{props.name}</p>
            <p className="trend_number">{props.tweets_num} Tweets</p>
        </div>
    <div className="trend_settings">
    <IconButton sx={{ width: 0.5, height: 0.5 }} className="trend_settings_botton" onClick={handleSettings} >
        <MoreHorizOutlinedIcon fontSize="medium"/>
    </IconButton>
    <div className="Popover_trend">
            <Popover
              open={Boolean(open)}
              anchorEl={open}
              onClose={handleClose}
              anchorReference="anchorEl"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              style={{
                width: "350px",
                height: "auto",
              }}
            >
              <div>
                <Typography sx={{ p: 2 }} className="tweet_settings_bar">
                  <SentimentDissatisfiedOutlinedIcon fontSize="small"/>  Not interested in this
                </Typography>
                <Typography sx={{ p: 2 }} className="tweet_settings_bar">
                  <SentimentDissatisfiedOutlinedIcon fontSize="small"/>  This trend is harmful or spammy
                </Typography>
               
              </div>
            </Popover>
          </div>
    </div>
    </div>
 )

}

export default Trend;