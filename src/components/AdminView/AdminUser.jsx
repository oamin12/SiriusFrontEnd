import React from "react";
import axios from "axios";
import SideBarAdmin from "./SideBarAdmin";
import { NavLink } from "react-router-dom";
import UsersCard from "./UsersCard";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./AdminUser.css";
import getAllUsers from "./UserCardInfo";
/**
 * @description this page contains all users in the system and a search bar that an admin 
 * can search for any user by his name and he can ban him, show some statistics, visit his profile and show his reports
 * @returns {div} div conatining search bar, all users 
 */
function AdminViewUser() {
  const [AllUsers, setAllUsers] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const resp = await getAllUsers();
      setAllUsers(resp);
    })();
  }, []);

  const [index, setIndex] = React.useState(-1);
  function HandleIndex(val) {
    setIndex(val);
  }
  function HandleBan() {
    for (let i = 0; i < AllUsers.length; i++) {
      if (AllUsers[i].id == index) {
        // post request
        (async () => {
          await axios.delete("http://localhost:3001/AllUsers/" + index);
          const resp = await getAllUsers();
          setAllUsers(resp);
          console.log(AllUsers);
        })();
        setIndex(-1);
        break;
      }
    }
  }

  HandleBan();

  /**
   * @description function that maps users from database to users 
   * @param {object} contact id - name - username - bio - profile picture  
   * @returns {UsersCard} 
   */
  function createuserCard(contact) {
    return (
      <UsersCard
        key={contact.id}
        id={contact.id}
        name={contact.name}
        username={contact.username}
        bio={contact.bio}
        img={contact.imgURL}
        handleIndexing={HandleIndex}
      />
    );
  }

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
          {AllUsers.map(createuserCard)}
        </div>
      </div>
    </div>
  );
}
export default AdminViewUser;
//pass a component as a prop
