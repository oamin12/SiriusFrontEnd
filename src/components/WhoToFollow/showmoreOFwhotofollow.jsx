import React from "react";
import "../Layout.css";
import SideBar from "../SideBar/SideBar";
import Heading from "../Home/constants/Heading";
import { NavLink } from "react-router-dom";
import SearchBox from "../Search/SearchBox";
import WhoToFollow from "../WhoToFollow/WhoToFollow";
import "../WhoToFollow/WhoToFollow.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Card from "../Search/Card";
import axios from "axios";

function createCard(contact, index) {
  return (
    <Card
      key={contact._id}
      name={contact.name}
      username={contact.username}
      bio={contact.bio}
      img={contact.image}
      styling={{ padding: "3% 15% 3% 15%", marginTop: "8%", marginLeft: "60%" }}
      followbutton={true}
    />
  );
}

function ShowMoreOFWhoToFollow(props) {
  let [whotofollow_data,setwhotofollow_data]=React.useState([])
  async function GetWhoToFollow() {
    let response = "";
    try {
      response = await axios
        .get("http://34.236.108.123:3000/home/Who-to-follow", config)
        .then((res) => res.data);
       //console.log("herererer", response.username);
   
      setwhotofollow_data(response.accounts);
      return response;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
    return response;
  }

  var token = sessionStorage.getItem("tokenValue");
  //console.log("dah el token ", localStorage.getItem("tokenValue"));
  var config = {
    method: "get",
    url: "http://34.236.108.123:3000/home/Who-to-follow",
    headers: { Authorization: "Bearer " + token },
  };
  
  React.useEffect(() => {
    (async () => {
      const resp = await GetWhoToFollow();
      setwhotofollow_data(resp.accounts);
    })();
  }, []);


  return (
    <div>
      <div className="layout">
        <SideBar flag_tweet_popuppage={props.flag_tweet_popuppage} />
        <div className="feeder">
          <div className="cont1">
            <NavLink to="/home">
              <ArrowBackIcon sx={{ marginTop: "2%", color: "black" }} />
            </NavLink>
            <Heading classname="connect_heading" title="Connect" />
          </div>
          <h3 className="Suggested_heading"> Suggested for you </h3>
          {whotofollow_data.map(createCard)}
        </div>

        <div className="widgets">
          <div className="search">
            <NavLink to="/search">
              <SearchBox size="40" />
            </NavLink>
          </div>
          <NavLink to="/signin">
            <div className="whatsHappening">what's happening</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default ShowMoreOFWhoToFollow;
