import React from "react";
import "./SideBarAdmin.css";
import "../SideBar/Icon";
import Icon from "../SideBar/Icon";
import { NavLink, useLocation } from "react-router-dom";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { margin } from "@mui/system";

const iconInfo = [
  {
    id: 0,
    iconText: "Dashboard",
    iconPicOutlined: DashboardOutlinedIcon,
    iconPic: DashboardIcon,
    link: "/admin/dashboard",
  },
  {
    id: 1,
    iconText: "Users",
    iconPic: PersonIcon,
    iconPicOutlined: PersonOutlinedIcon,
    link: "/admin/user",
  },
];

function CreateIcons(icons) {
  let location = useLocation();
  if (location.pathname.includes(icons.link)) {
    return (
      <Icon
        active
        key={icons.id}
        iconText={icons.iconText}
        IconPic={icons.iconPic}
        link={icons.link}
      />
    );
  } else {
    return (
      <Icon
        key={icons.id}
        iconText={icons.iconText}
        IconPic={icons.iconPicOutlined}
        link={icons.link}
      />
    );
  }
}
/**
 * @description component which returns the sidebar that contains the navigation routes
 * @returns {div} A div that returns the component
 */

function SideBarAdmin() {
  return (
    <div className="SideBarAdmin">
      <div className="SideBarAdminHeader">
        <NavLink
          to="/admin/dashboard"
          style={{ color: "rgb(29, 161, 242)" }}
        >
          <h1 className="logo" style={{ textAlign: "center" }}>
            Sirius
          </h1>
          <h6 style={{ textAlign: "center", paddingLeft: "8px" }}>
            Admin view
          </h6>
        </NavLink>
      </div>
      <div className="SideBarAdminIcons">{iconInfo.map(CreateIcons)}</div>
      <div className="SideBarFooter">
        <NavLink to="/home">
          <button
            className="tweetButtonSideBar"
            style={{
              position: "relative",
              bottom: "0",
              margin: "10px",
              width: "-webkit-fill-available",
            }}
          >
            Return to Home
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default SideBarAdmin;
//pass a component as a prop
