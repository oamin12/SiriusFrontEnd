import React from "react";
import greyback from "./Images/grey.png";
import { useNavigate } from "react-router-dom";
import "./Logout.css";

/**
 * @description Component that contains the logout page which makes sure the user wants to log out
 * @returns {div}
 */  
const Logout = () => {
  let navigate = useNavigate();
  function handleLogOut()
  {
    sessionStorage.setItem("tokenValue","");
    localStorage.setItem("UserName","");
    localStorage.setItem("Name","");
    localStorage.setItem("UserProfile","");
    localStorage.setItem("TopName","");
    localStorage.setItem("UserImage","");


    navigate("/");
  }
  return (
    <div className="Logout">
      <img className="backf4" src={greyback} />
      <div className="containerf4">
        <h1 className="h1f4">Log out of Sirius?</h1>
        <p className="youf4">
          You can always log back in at any <br /> time. If you just want to
          switch <br /> accounts, you can do that by adding <br /> an existing
          account.
        </p>
        <button onClick={handleLogOut} className="outf4">
          Log out
        </button>
        <button onClick={() => navigate("/home")} className="cancelf4">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Logout;
