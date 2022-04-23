import React from "react";
import SideBarAdmin from "./SideBarAdmin";
import { NavLink } from "react-router-dom";
import UsersCard from "./UsersCard";
import people from "../Search/people";
import  SearchOutlinedIcon  from "@mui/icons-material/SearchOutlined";
import "./AdminUser.css";

function createuserCard(contact) {
  return (
    <UsersCard 
      key={contact.id}
      id={contact.id}
      name={contact.name}
      username={contact.username}
      bio={contact.bio}
      img={contact.imgURL}
    />
  );
}


function AdminViewUser() {
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
      <div className="AdminMain">
      <div className="UserMain">
          <div className="AdminUserSearch">
            <SearchOutlinedIcon /> 
            <input type="text" placeholder="search..." />
          </div>
      {people.map(createuserCard)}
      </div>
      </div>
    </div>
  );
}
export default AdminViewUser;
//pass a component as a prop