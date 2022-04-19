import React from "react";
import SideBarAdmin from "./SideBarAdmin";
import AdminMain from "./AdminMain";
import { NavLink } from "react-router-dom";

import "./AdminView.css";

function AdminView() {
  return (
    <div className="AdminView">
      <div className="SideBarAdmin">
        <div className="SideBarAdminHeader">
          <NavLink
            to="/adminView/dashboard"
            style={{ color: "rgb(29, 161, 242)" }}
          >
            <h1 className="logo" style={{ textAlign: "center" }}>
              Sirius
            </h1>
            <h6 style={{ textAlign: "center", paddingLeft: "8px" }}>
              Admin view
            </h6>
          </NavLink>
        </div>
        <SideBarAdmin />
          </div>
          
      <AdminMain />
    </div>
  );
}
export default AdminView;
//pass a component as a prop
