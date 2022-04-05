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
import Search from "./Search/Search"
function App(props) {
  return (
    <BrowserRouter>
      <div className="homeLayout">
        <Routes>
          <Route path="/" exact element={<Home flag={props.flag}/>} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search/>} />
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
