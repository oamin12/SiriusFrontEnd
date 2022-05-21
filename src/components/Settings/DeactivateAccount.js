import React from "react";
import "./DeactivateAccount.css";
import SideBar from "../SideBar/SideBar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
function DeactivateAccount() {
  let navigate = useNavigate();
  return (
    <div className="layout">
      <SideBar />
      <div className="feeder">
        <ArrowBackIcon
          onClick={() => navigate("/settings")}
          className="arrow-back"
        />
        <h3 className="header-deactivate">Deactivate account</h3>
        <hr className="line-deactivate2"></hr>
        <h4 className="info-deactivate">This will deactivate your account</h4>
        <p className="info2-deactivate">
          You’re about to start the process of deactivating your Sirius account.
          Your display name,
          <br />
          @username, and public profile will no longer be viewable on Sirius,
          Sirius for iOS, or
          <br />
          Sirius for Android.
        </p>
        <hr className="line-deactivate"></hr>
        <button
          className="deactivate-deactivate"
          onClick={() => navigate("/settings/confirmdeactivate")}
        >
          Deactivate
        </button>
      </div>
      <div className="widgets">
        <div className="search">search</div>
        <div className="whatsHappening">what's happening</div>
        <div className="whoToFollow">who to follow</div>
      </div>
    </div>
  );
}

export default DeactivateAccount;
