import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Explore from "./Explore/Explore";
import Notifications from "./Notifications/Notifications";
import Messages from "./Messages/Messages";
import Bookmarks from "./Bookmarks/Bookmarks";
import Settings from "./Settings/Settings";
import Profile from "./Profile/Profile";
import Verify from "./StartupPage/Verify";
import Search from "./Search/Search";
import Followers from "./Profile/ProfileFollowers/Followers";
import Followings from "./Profile/ProfileFollowing/Followings";
import StartPage from "./StartupPage/StartPage";
import AdminView from "./AdminView/AdminView";
import AdminReports from "./AdminView/AdminReports/AdminRports";
import AdminViewUser from "./AdminView/AdminUser";
import LoginForm from "./StartupPage/LoginForm";
import SignUp from "./StartupPage/SignUp";
import ForgetPassword from "./StartupPage/ForgetPassword";
import SignInRedirect from "./StartupPage/SignInRedirect";
import Logout from "./StartupPage/Logout";
import ShowMoreOFWhoToFollow from "./WhoToFollow/showmoreOFwhotofollow";
import AccountInformation from "./Settings/AccountInformation";
import ChangePassword from "./Settings/ChangePassword";
import DeactivateAccount from "./Settings/DeactivateAccount";
import Popup from "./Settings/Popup";
import ChangeUsername from "./Settings/ChangeUsername";
import ChangeEmail from "./Settings/ChangeEmail";
import ProtectedTweets from "./Settings/ProtectedTweets";
import TweetPage from "./Tweet/TweetPage";
import Display from "./Settings/Display";
import NotificationsSettings from "./Settings/NotificationsSettings";
function App(props) {
  // var userName=localStorage.getItem("UserProfile");
  var UserName = localStorage.getItem("UserName");

  // var userName=localStorage.setItem("UserProfile",localStorage.getItem("UserName"));
  // const [UserProfile, setUserProfile] = useState(userName);
  // function setProfileRoute()
  // {
  //   setUserProfile(userName);
  // }
  //setProfileRoute();
  // console.log("AAAAAAAAAAAAAAAAAA",UserProfile);
  /*TODO: CHANGE PROFILE ROUTES*/
  return (
    <BrowserRouter>
      <div className="homeLayout">
        <Routes>
          {/* userName= {localStorage.getItem("UserProfile")} */}
          <Route path="/" exact element={<StartPage />} />
          <Route path="/signinredirect" exact element={<SignInRedirect />} />
          <Route path="/signin" exact element={<LoginForm />} />
          <Route path="/logout" exact element={<Logout />} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/logout" exact element={<Logout />} />
          <Route path="/signup/verify" exact element={<Verify />} />
          <Route path="/forgetpassword" exact element={<ForgetPassword />} />
          <Route
            path="/home"
            exact
            element={
              <Home
                weekdayName={props.weekdayName}
                month={props.month}
                date={props.date}
                year={props.year_toset_theyear_value}
                time={props.time}
                minutes={props.minutes}
                hours={props.hours}
                am_pm={props.am_pm}
                flag_stop_working_from_poll_to_schedule={
                  props.flag_stop_working_from_poll_to_schedule
                }
                flag={props.flag}
                flagconfirm={props.flagconfirm}
                flag_tweet_popuppage={props.flag_tweet_popuppage}
              />
            }
          />
          <Route path="/admin/dashboard" element={<AdminView />} />
          <Route path="/admin/user" element={<AdminViewUser />} />
          <Route path="/admin/:user/reports" element={<AdminReports />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
          <Route path="/:userName" element={<Profile />} />
          <Route
            path={"/" + UserName + "/with_replies"}
            element={<Profile />}
          />
          <Route path={"/" + UserName + "/media"} element={<Profile />} />
          <Route path={"/" + UserName + "/likes"} element={<Profile />} />
          <Route path={"/" + UserName + "/followers"} element={<Followers />} />
          <Route
            path={"/" + UserName + "/following"}
            element={<Followings />}
          />
          <Route path="/:username/with_replies" element={<Profile />} />
          <Route path="/:username/media" element={<Profile />} />
          <Route path="/:username/likes" element={<Profile />} />
          <Route path="/:username/followers" element={<Followers />} />
          <Route path="/:username/following" element={<Followings />} />
          <Route path="/whotofollow" element={<ShowMoreOFWhoToFollow />} />
          <Route
            path="/settings/accountinformation"
            element={<AccountInformation />}
          />
          <Route path="/settings/changepassword" element={<ChangePassword />} />
          <Route
            path="/settings/deactivateaccount"
            element={<DeactivateAccount />}
          />
          <Route path="/settings/confirmdeactivate" element={<Popup />} />
          <Route path="/settings/changeusername" element={<ChangeUsername />} />
          <Route path="/settings/changeemail" element={<ChangeEmail />} />
          <Route
            path="/settings/protectedtweets"
            element={<ProtectedTweets />}
          />
          <Route
            path={"/" + UserName + "/status/:TweetId"}
            element={<TweetPage />}
          />
          <Route
            path={"/:username/status/:TweetId"}
            element={
              <TweetPage
                weekdayName={props.weekdayName}
                month={props.month}
                date={props.date}
                year={props.year_toset_theyear_value}
                time={props.time}
                minutes={props.minutes}
                hours={props.hours}
                am_pm={props.am_pm}
                flag_stop_working_from_poll_to_schedule={
                  props.flag_stop_working_from_poll_to_schedule
                }
                flag={props.flag}
                flagconfirm={props.flagconfirm}
              />
            }
          />
          <Route
            path="/settings/editnotifications"
            element={<NotificationsSettings />}
          />
          <Route path="/settings/display" element={<Display />} />
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
