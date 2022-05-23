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
import FriendRequestButton from "./FriendRequestButton";
import getNotifications from "../Notifications/Notifsdb";
var UserName = localStorage.getItem("UserName");

const accountInfo = {
  username: "test",
  name: "testName",
  picture: "",
};

function CreateIcons(icons) {
  let location = useLocation();

  if (
    icons.link.includes("notifications") &&
    location.pathname.includes(icons.link)
  ) {
    return (
      <Icon
        active
        key={icons.id}
        iconText={icons.iconText}
        IconPic={icons.iconPic}
        link={icons.link}
        numOfNotifs={0}
      />
    );
  } else if (location.pathname.includes(icons.link)) {
    return (
      <Icon
        active
        key={icons.id}
        iconText={icons.iconText}
        IconPic={icons.iconPic}
        link={icons.link}
        numOfNotifs={icons.numOfNotifs}
      />
    );
  } else {
    return (
      <Icon
        key={icons.id}
        iconText={icons.iconText}
        IconPic={icons.iconPicOutlined}
        link={icons.link}
        numOfNotifs={icons.numOfNotifs}
      />
    );
  }
}

/**
 *@description Component which is the sidebar which conatins all the navigation routes of the website and the website header
 * @returns {div} a div that returns that component
 */
function SideBar(props) {
  let isAdmin = localStorage.getItem("Admin");
  console.log("Adminn", isAdmin);
  const [Open, setOpen] = React.useState(false); //open main popup page of the tweet

  const [Notif, setNotifs] = React.useState([]);
  const [number, setNumber] = React.useState(0);
  const [Flag, setFlag] = React.useState(0);

  function createTweetPopUpPage() {
    setOpen(true);
  }

  React.useEffect(() => {
    (async () => {
      if (Flag === 0) {
        //if (!URL().pathname.includes("notifications")) {
        const resp = await getNotifications();
        setNotifs(resp);
        console.log("1st time");
        let j = 0;
        setNumber(resp.countOfNewNotifications);
        setFlag(1);
        //}
      }
    })();
  }, []);

  React.useEffect(() => {
    setInterval(() => {
      (async () => {
        //if (!URL().pathname.includes("notifications")) {
        const resp = await getNotifications();
        setNotifs(resp.countOfNewNotifications);
        console.log("hello from sidebar");
        setNumber(resp.countOfNewNotifications);
        //}
      })();
    }, 60000);
  }, []);

  let iconInfo = [
    {
      id: 0,
      iconText: "Home",
      iconPicOutlined: HomeOutlinedIcon,
      iconPic: HomeIcon,
      link: "/home",
      numOfNotifs: 0,
    },
    {
      id: 1,
      iconText: "Explore",
      iconPic: TagIcon,
      iconPicOutlined: TagOutlinedIcon,
      link: "/explore",
      numOfNotifs: 0,
    },
    {
      id: 2,
      iconText: "Notifications",
      iconPic: NotificationsIcon,
      iconPicOutlined: NotificationsNoneIcon,
      link: "/notifications",
      numOfNotifs: number,
    },
    {
      id: 3,
      iconText: "Bookmarks",
      iconPic: BookmarkIcon,
      iconPicOutlined: BookmarkBorderOutlinedIcon,
      link: "/bookmarks",
      numOfNotifs: 0,
    },
    {
      id: 4,
      iconText: "Profile",
      iconPic: PersonIcon,
      iconPicOutlined: PermIdentityIcon,
      link: "/" + UserName,
      numOfNotifs: 0,
    },
    {
      id: 5,
      iconText: "Settings",
      iconPic: SettingsIcon,
      iconPicOutlined: SettingsOutlinedIcon,
      link: "/settings",
      numOfNotifs: 0,
    },
  ];
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
            <FriendRequestButton />
            <button
              className="tweetButtonSideBar"
              onClick={createTweetPopUpPage}
            >
              Tweet
            </button>
            {isAdmin === "true" ? (
              <div>
                <NavLink to="/admin/dashboard">
                  <button className="tweetButtonSideBar">
                    Switch to Admin
                  </button>
                </NavLink>
              </div>
            ) : null}
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
