import React from "react";
import axios from "axios";
import SideBarAdmin from "./SideBarAdmin";
import { NavLink } from "react-router-dom";
import UsersCard from "./UsersCard";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./AdminUser.css";
import getAllUsers from "./UserCardInfo";


function AdminViewUser() {

  const [AllUsers, setAllUsers] = React.useState([]);
  var token = sessionStorage.getItem("tokenValue");
  var config = {
    method: 'delete',
    headers: {Authorization:"Bearer "+token }
  };
  
  React.useEffect(() => {
    (async () => {
      const resp = await getAllUsers();
      setAllUsers(resp.user);
      console.log(resp.user[0]);
    })();
  }, []);
  console.log("Outside UseEffect");
  const [index, setIndex] = React.useState(-1);
  function HandleIndex(val) {
    setIndex(val);
  }
  function HandleBan() {
    for (let i = 0; i < AllUsers.length; i++) {
      if (AllUsers[i].username == index) {
        // post request
        (async () => {
          await axios.delete("http://34.236.108.123:3000/admin/" + index + "/ban",config);
          const resp = await getAllUsers();
          setAllUsers(resp.user);
          console.log(AllUsers);
        })();
        setIndex(-1);
        //document.location.reload();
        //setPeople(people.splice(i, 1));
        break;
      }
    }
    console.log(index);
  }

  HandleBan();

  function createuserCard(contact) {
    return (
      <UsersCard
        key={contact.id}
        id={contact.id}
        name={contact.name}
        username={contact.username}
        bio={contact.bio}
        img={contact.image}
        handleIndexing={HandleIndex}
        link={"/"+contact.username}
      />
    );
  }
  return (
    <div className="AdminView">
      <div className="SideBarAdmin">
        <div className="SideBarAdminHeader">
          
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
