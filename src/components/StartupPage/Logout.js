import React from "react";
import greyback from "./Images/grey.png";
import { useNavigate } from "react-router-dom";
import "./Logout.css";

const Logout = () => {
  let navigate = useNavigate();
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
        <button onClick={() => navigate("/")} className="outf4">
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
