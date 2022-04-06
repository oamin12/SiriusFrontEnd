import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Explore from "./Explore/Explore";
import Notifications from "./Notifications/Notifications";
import Messages from "./Messages/Messages";
import Bookmarks from "./Bookmarks/Bookmarks";
import Settings from "./Settings/Settings";
import Profile from "./Profile/Profile";
import Search from "./Search/Search";
import Followers from "./Profile/Followers";
import Followings from "./Profile/ProfileFollowing/Followings";
import Start  from "./StartupPage/Start";
// import SignUp from "./StartupPage/SignUp";

function App(props) {
  return (
    <BrowserRouter>
      <div className="homeLayout">
        <Routes>
          <Route path="/" exact element={<Start/>}/>
          <Route path="/home" exact element={<Home flag={props.flag}/>} />
          
          <Route path="/explore" element={<Explore />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search/>} />
          <Route path="/profile/with_replies" element={<Profile />} />
          <Route path="/profile/media" element={<Profile />} />
          <Route path="/profile/likes" element={<Profile />} />
          <Route path="/profile/followers" element={<Followers />} />
          <Route path="/profile/followings" element={<Followings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
//1st div for sidebar
//2nd div for feeder
//3rd div for widgets i.e what's happening,search,whotofollow
/*
 */
