import React from "react";
import Card from "../Search/Card";
import { Button_showmore } from "./WhoToFollow_style";
import { NavLink } from "react-router-dom";
import axios from "axios";

function createCard(contact, index) {
  if (index < 3) {
    return (
      <Card
        key={contact._id}
        name={contact.name}
        username={contact.username}
        bio={contact.bio}
        img={contact.imgURL}
        style={{ marginLeft: "-2%" }}
        followbutton={true}
        styling={{ padding: "5% 30% 5% 30%", marginTop: "8%" }}
      />
    );
  }
}
function WhoToFollow(props) {
    let [whotofollow_data, setwhotofollow_data] = React.useState([]);

  async function GetWhoToFollow() {
    let response = "";
    try {
      response = await axios
        .get("http://34.236.108.123:3000/home/Who-to-follow", config)
        .then((res) => res.data);
      console.log("herererer", response.username);

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
    <div className="whotofollow">
      <h3 className="whotofollow_heading"> Who to follow</h3>
      {whotofollow_data.map(createCard)}
      <NavLink to="/whotofollow" style={Button_showmore}>
        {" "}
        Show more{" "}
      </NavLink>
    </div>
  );
}
export default WhoToFollow;
