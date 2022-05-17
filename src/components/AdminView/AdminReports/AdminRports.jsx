import React from "react";
import SideBarAdmin from "../SideBarAdmin";
import AdminMain from "../AdminMain";
import { NavLink } from "react-router-dom";
import ReportCard from "./ReportCard";

import "./AdminReports.css";

function AdminReports() {
  return (
    <div className="AdminView">
      <div className="SideBarAdmin">
        <div className="SideBarAdminHeader">
         
        </div>
        <SideBarAdmin />
          </div>
          <ReportCard />
    </div>
  );
}
export default AdminReports;
//pass a component as a prop
