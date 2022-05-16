import React from "react";
import "./SideBarAdmin.css";
import "../SideBar/Icon";
import Icon from "../SideBar/Icon";
import { NavLink, useLocation } from "react-router-dom";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { margin } from "@mui/system";

const iconInfo = [
  {
    id: 0,
    iconText: "Dashboard",
    iconPicOutlined: DashboardOutlinedIcon,
    iconPic: DashboardIcon,
    link: "/adminView/dashboard",
  },
  {
    id: 1,
    iconText: "Users",
    iconPic: PersonIcon,
    iconPicOutlined: PersonOutlinedIcon,
    link: "/adminView/User",
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
    <div className="SideBarAdminIcons">
          {iconInfo.map(CreateIcons)}
          <div className="SideBarFooter">
          <NavLink to="/home">
          <button className="tweetButtonSideBar" style={{marginTop:"450px", marginRight:"20px"}}>Return to Home</button>
          </NavLink>
          </div>
    </div>
  );
}
export default SideBarAdmin;
//pass a component as a prop
