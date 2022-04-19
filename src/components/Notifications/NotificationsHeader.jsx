import React from "react";
import "./NotificationsHeader.css";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { NavLink } from "react-router-dom";
function NotificationsHeader() {
  return (
    <div className="notificationsHeader">
      <h2 className="notificationsText">Notifications</h2>

      <div className="notificationsSettingsButton">
        <NavLink to="/settings" className="notifLink">
          <SettingsOutlinedIcon />
        </NavLink>
      </div>
    </div>
  );
}
export default NotificationsHeader;
