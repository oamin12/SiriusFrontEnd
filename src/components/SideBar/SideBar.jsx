import React from "react";
import Icon from "./Icon";
import "./SideBar.css";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MailIcon from "@mui/icons-material/Mail";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PersonIcon from "@mui/icons-material/Person";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import TagIcon from "@mui/icons-material/Tag";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import { Link, NavLink, useLocation } from "react-router-dom";
import SideBarFooter from "./SideBarFooter";
import TweetPopUpPage from "./TweetPopUpPage";
let isAdmin = true;
var UserName = localStorage.getItem("UserName");
const iconInfo = [
  {
    id: 0,
    iconText: "Home",
    iconPicOutlined: HomeOutlinedIcon,
    iconPic: HomeIcon,
    link: "/home",
  },
  {
    id: 1,
    iconText: "Explore",
    iconPic: TagIcon,
    iconPicOutlined: TagOutlinedIcon,
    link: "/explore",
  },
  {
    id: 2,
    iconText: "Notifications",
    iconPic: NotificationsIcon,
    iconPicOutlined: NotificationsNoneIcon,
    link: "/notifications",
  },
  {
    id: 3,
    iconText: "Messages",
    iconPic: MailIcon,
    iconPicOutlined: MailOutlineIcon,
    link: "/messages",
  },
  {
    id: 4,
    iconText: "Bookmarks",
    iconPic: BookmarkIcon,
    iconPicOutlined: BookmarkBorderOutlinedIcon,
    link: "/bookmarks",
  },
  {
    id: 5,
    iconText: "Profile",
    iconPic: PersonIcon,
    iconPicOutlined: PermIdentityIcon,
    link: "/" + UserName,
  },
  {
    id: 6,
    iconText: "Settings",
    iconPic: SettingsIcon,
    iconPicOutlined: SettingsOutlinedIcon,
    link: "/settings",
  },
];

const accountInfo = {
  username: "test",
  name: "testName",
  picture: "",
};

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
 *@description Component which is the sidebar which conatins all the navigation routes of the website and the website header
 * @returns {div} a div that returns that component
 */
function SideBar(props) {
  const [Open, setOpen] = React.useState(false); //open main popup page of the tweet

  function createTweetPopUpPage() {
    setOpen(true);
  }

  return (
    <div className="sideBarParent">
      {/* msh 3yza ytrender tany lma arender el page bt3et post a tweet from the schedule */}

      {props.TweetButtonPopUpPage !== 1 && (
        <div>
          <div className="sideBar">
            <NavLink to="/home">
              <h1 className="logo">Sirius</h1>
            </NavLink>
            {iconInfo.map(CreateIcons)}
            <button
              className="tweetButtonSideBar"
              onClick={createTweetPopUpPage}
            >
              Tweet
            </button>
            {isAdmin?
          <NavLink to="/admin/dashboard">
              <button className="tweetButtonSideBar">
              Switch to Admin
              </button>
          </NavLink>
          :null}
            <SideBarFooter
              username={accountInfo.username}
              name={accountInfo.name}
              picture={accountInfo.picture}
            />
          </div>
        </div>
      )}
      <TweetPopUpPage setOpen={setOpen} Open={Open} />

    </div>
  );
}

export default SideBar;
