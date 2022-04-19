import React from "react";
import "./SideBarAdmin.css";
import "../SideBar/Icon";
import Icon from "../SideBar/Icon";
import { useLocation } from "react-router-dom";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

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

function SideBarAdmin() {
  return (
    <div className="SideBarAdminIcons">
          {iconInfo.map(CreateIcons)}
    </div>
  );
}
export default SideBarAdmin;
//pass a component as a prop
