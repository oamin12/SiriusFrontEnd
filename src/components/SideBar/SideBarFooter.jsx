import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import "./SideBarFooter.css";

function SideBarFooter(props) {
  const [open, setOpen] = React.useState(null);

  function handleClick(event) {
    setOpen(event.currentTarget);
    props.handleClick();
  }

  function handleClose() {
    setOpen(null);
    props.handleClose();
  }

  return (
    <footer className="footer">
      <button className="avatarButton" onClick={handleClick}>
        <Avatar alt="profile picture" src={props.picture} />
        <div className="info">
          <div>{props.name}</div>
          <div>{props.username}</div>
        </div>
        <div className="moreHorizIcon">
          <MoreHorizIcon />
        </div>
      </button>
      <div className="Popover">
        <Popover
          open={Boolean(open)}
          anchorEl={open}
          onClose={handleClose}
          anchorReference="anchorEl"
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          style={{
            width: "300px",
            height: "200px",
          }}
        >
          <div>
            <Typography sx={{ p: 2 }} className="sideBarFooterMenuBar">
              Add an existing account
            </Typography>
            <Typography sx={{ p: 2 }} className="sideBarFooterMenuBar">
              Log out @{props.username}
            </Typography>
          </div>
        </Popover>
      </div>
    </footer>
  );
}
export default SideBarFooter;
//pass a component as a prop