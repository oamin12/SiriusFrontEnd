import React from "react";
import "./Explore.css";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { NavLink } from "react-router-dom";
import SearchBox from "../Search/SearchBox";
import { Tabs,Tab, Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

/**
 * @description Component which is the Explore Header Which contans search box area and its settings
 * @returns div that renders the component
 */ 
function ExploreHeader(props) {
    const [openModal, setOpenModal] = React.useState(false);

    function handleClick(event) {
      setOpenModal(event.currentTarget)
    }
    
    function handleModalClose() {
      setOpenModal(false);
    }
    
    
    
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 600,
        height:500,
        bgcolor: "background.paper",
        border: "0px",
        boxShadow: 24,
        p: 4,
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
      };
  
  
    return (
    <div className="exploreHeader">
      <div className="exploreHeader_settings">
        <div className="explore_searchBox"><SearchBox size="60"/></div>
        <div className="button_area"><Button className="exploreSettingsButton" onClick={handleClick}>
        <SettingsOutlinedIcon fontSize="medium"/>
        </Button>
        </div>
      </div>
        <Modal open={openModal} onClose={handleModalClose}>
          <Box sx={style}>
            <h2 className="modalHeader">Trends</h2>
            <div style={{display:"flex"}}>
            <div>
            <p className="exploreHeader_settings_menu_p1" >Trends for you</p>
            <p className="exploreHeader_settings_menu_p2">Personalize trends based on your location and who you follow.</p>
            </div>
            <input style={{width:"40px"}} type="checkbox"/>
            </div>
          </Box>
        </Modal>
        <div className="Tabs_explore">
        <Tabs textColor="inheret" style={{color:"Black"}} variant="fullWidth">
                <NavLink to="/explore" style={{color:"Black"}}>
                <Tab  label="For you" />
                </NavLink>
                <NavLink to="/explore" style={{color:"Black",fontSize:"14px"}}>
                <Tab  label="News" style={{padding:"7px 7px 7px 7px"}} />
                </NavLink>
                <NavLink  to="/explore" style={{color:"Black"}}>
                <Tab  label="Sports" />
                </NavLink>
                <NavLink to="/explore" style={{color:"Black"}}>
                <Tab  label="Entertainment" />  
                </NavLink>  
            </Tabs>
        </div> 
    </div>
  );
}
export default ExploreHeader;
