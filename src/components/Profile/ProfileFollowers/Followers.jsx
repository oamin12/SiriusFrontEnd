import React from "react";
import FollowTab from "../ProfileFollowing/FollowTab.jsx";
import FollowerCard from "./FollowerCard.jsx";
import people from "../../Search/people";
import "../../Layout.css";
import SideBar from "../../SideBar/SideBar";
import axios from "axios";

function createCard(contact) {
    return (
      <FollowerCard
        key={contact._id}
        name={contact.name}
        username={contact.username}
        bio={contact.bio}
        img={contact.image}
        protectedTweets={contact.protectedTweets}
        followsMe={contact.followsMe}
        isMe={contact.isMe}
        followsHim={contact.followsHim}
        protected={!contact.isMe && !contact.followsHim && contact.protectedTweets}
      />
    );
  }
  /**
   * @description page of all followers of a user
   * @returns {div}
   */
function Followers() {
  const [profileFollowers,setprofileFollowers ] = React.useState([]);
  var token = sessionStorage.getItem("tokenValue");

  async function GetUserFollowers(UserName) {
      console.log("INSIDE FUNCTION",UserName);
      var config = {
          method: 'get',
          // url: 'http://34.236.108.123:3000/'+UserName,
          headers: {Authorization:"Bearer "+token }
        };
      let response = '';
    try {
      response = await axios.get('http://34.236.108.123:3000/'+UserName+'/followers',config).then((res) => res.data);
      //response = await axios.get("http://localhost:3001/User").then((res) => res.data);
      
      return (response);
    } catch (error) {
      if (error.response) {
        return (error.response);
      }
    }
    return (response);
  }


  React.useEffect(() => {
    (async () => {
      const resp = await GetUserFollowers(localStorage.getItem("UserProfile"));
      setprofileFollowers(resp.followers);

    })();
  }, []);
  return (
    <div className="layout">
      <SideBar />
      <div className="feeder">
      <FollowTab
        name={localStorage.getItem("TopName")}
        username={localStorage.getItem("UserProfile")}

       />
      {profileFollowers.map(createCard)}</div>
      <div className="widgets">
        <div className="search">search</div>
        <div className="whatsHappening">what's happening</div>
        <div className="whoToFollow">who to follow</div>
      </div>
    </div>
  );
}

export default Followers;
