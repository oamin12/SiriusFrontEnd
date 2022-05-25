import React, { useState } from "react";
import "../Layout.css";
import "./ChangeEmail.css";
import SideBar from "../SideBar/SideBar";
import { useNavigate } from "react-router-dom";
import WhoToFollow from "../WhoToFollow/WhoToFollow";
import SearchBox from "../Search/SearchBox";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
function ChangeEmail() {
  let navigate = useNavigate();
  var token = sessionStorage.getItem("tokenValue");
  const [email, setEmail] = useState("");
  const [successMsg, setSucessMsg] = useState("");
  const [errorName, setErrorMsg] = useState("");
  console.log(" Current Email:", email);
  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  async function ChangeEmailReq() {
    let response = "";
    try {
      response = await axios
        .patch(
          "http://34.236.108.123:3000/settings/Account-info/Email/",
          { email: email },
          { headers: { Authorization: "Bearer " + token } }
        )
        .then((res) => res.data);
      if (response.status === "success") {
        setSucessMsg("Email changed succesfully!");
      }
      return response;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
    console.log(response);
    return response;
  }
  function handleChangeEmail() {
    ChangeEmailReq();
  }

  return (
    <div className="layout">
      <SideBar />
      <div className="feeder">
        <ArrowBackIcon
          onClick={() => navigate("/settings/accountinformation")}
          className="arrow-back"
        />
        <h3 className="header-email">Change email</h3>
        <input
          className="email-email"
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={email}
        />
        <hr className="line-password"></hr>
        <button onClick={handleChangeEmail} className="update-email">
          Update email address
        </button>
        {successMsg != "" ? (
          <div
            style={{
              position: "fixed",
              marginTop: "100px",
              marginLeft: "-630px",
              textAlign: "center",
              color: "#00acee",
            }}
          >
            {successMsg}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="widgets">
        <div className="search">
          <SearchBox
            size="40"
            styling={{
              width: "30%",
              marginTop: "-15.5%",
              marginLeft: "70%",
              height: "60%",
            }}
          />
        </div>
        <div className="whatsHappening">what's happening</div>
        <div className="whoToFollow">
          {" "}
          <WhoToFollow />{" "}
        </div>
      </div>
    </div>
  );
}

export default ChangeEmail;
