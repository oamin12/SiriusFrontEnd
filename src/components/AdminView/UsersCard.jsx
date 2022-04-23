import React from "react";
import "./UsersCard.css";
import {Avatar} from "@mui/material";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../Bookmarks/BookmarksHeader.css"
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useState } from "react";
import people from "../Search/people";
import ReactDOM from "react-dom";
import App from "../App";
import AdminUserStats from "./AdminUserStats/AdminUserStats";


const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    border: "0px",
    boxShadow: 24,
    p: 4,
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  const styleStats = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "600px",
    bgcolor: "background.paper",
    border: "0px",
    boxShadow: 24,
    p: 4,
    borderRadius: "8px",
    
  }

 
function UsersCard(props) {
  const [openModal, setOpenModal] = useState(false);
  function handleBanButtonClick() {
    setOpenModal(true);
  }
  function handleModalClose() {
    setOpenModal(false);
  }
  function handleBanLinkClick(event) {
    
    for(let i = 0; i<people.length;i++)
    {
        if(people[i].id==[props.id])
        {
            // post request
            people.splice(i,1);
            break;
        }
    }

   
    
    handleModalClose();
    console.log(props.id);
    ReactDOM.render(<App flag={1} />, document.getElementById("root"));
  }
  function handleCancelButtonClick() {
    handleModalClose();
  }

  const [openModalStats,setOpenModalStats] =useState(false);

  function handleStatButtonClick(){
    setOpenModalStats(true);
  }
 
  function handleModalStatsClose() {
    setOpenModalStats(false);
  }


  return (
            <div>
            
        <div className="UsersCard">
        
            <Avatar style={{marginRight: "4px"}} src= {props.img} />

            <div className="UsersData">
                <p style={{margin: "0px 0px 4px 4px"}}><b>{props.name}</b></p>
                <p style={{margin: "0px 0px 4px 4px", fontSize: "13px", color: "gray"}}>{props.username}</p>
                <p style={{margin: "0px 0px 4px 4px", fontSize: "13px", color: "gray"}}>{props.bio}</p>
            </div>

            
            <button className="followButton" onClick={handleStatButtonClick} style={{backgroundColor:"green" , marginLeft:"20px"}}>Statistics</button>
            <Modal open={openModalStats} onClose={handleModalStatsClose}>
                <Box sx={styleStats}>
                    <h2 className="modalHeader" style={{color:"rgb(29, 161, 242)" ,textAlign:"center", paddingBottom:"10px", borderBottom: "1px solid lightgray"}}>User Statistics</h2>
                    <AdminUserStats />
                    <button className="cancelButton" onClick={handleModalStatsClose}>
                    Cancel
                    </button>

                    

                </Box>
            </Modal>

            <div className="followButton" style={{backgroundColor:"rgb(29, 161, 242)" ,minWidth:"70px", marginLeft:"20px"}}><NavLink to="/profile" style={{textDecoration:"none", color:"white"}}>Profile</NavLink></div>
            <button className="followButton" id={props.id} onClick={handleBanButtonClick} style={{backgroundColor:"red" ,minWidth:"70px", marginLeft:"20px"}}>Ban</button>
            <Modal open={openModal} onClose={handleModalClose}>
                <Box sx={style}>
                    <h3 className="modalHeader" style={{textAlign:"center"}}>Ban User</h3>
                    <p className="boxParagraph">
                    This can't be undone and you'll ban this user
                    </p>

                    <button className="clearLink" onClick={handleBanLinkClick}>
                    Ban
                    </button>
                    <button className="cancelButton" onClick={handleCancelButtonClick}>
                    Cancel
                    </button>
                </Box>
            </Modal>
           
            <div className="followButton" style={{backgroundColor:"black" , marginLeft:"20px"}} > 
            <NavLink to="/adminView/user/reports" style={{textDecoration:"none", color:"white"}}>Reports</NavLink></div>
            
        </div>
        </div>
  );
}

export default UsersCard;