import React from "react";
import SideBarAdmin from "./SideBarAdmin";
import AdminMain from "./AdminMain";
import { NavLink } from "react-router-dom";

import "./AdminView.css";
/**
 * @description Component which renders AdminMain
 * @returns {div} A div which returns that component
 */
function AdminView() {
  return (
    <div className="AdminView">
      <div className="SideBarAdmin">
        <SideBarAdmin />
      </div>
      <AdminMain />
    </div>
  );
}
export default AdminView;
//pass a component as a prop
