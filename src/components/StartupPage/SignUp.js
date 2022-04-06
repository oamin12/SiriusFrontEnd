import React from "react";
import "./styles.css";
import { useHistory } from "react-router-dom";
let type = 0;
const SignUp = () => {
  const ChangeToEmail = () => {
    const a = document.getElementById("change");
    const text = document.querySelector("a");
    a.placeholder = "Email";
    text.textContent = "Use phone instead";
    type = 1;
  };

  const ChangeToPhone = () => {
    const a = document.getElementById("change");
    const text = document.querySelector("a");
    a.placeholder = "Phone";
    text.textContent = "Use email instead";
    type = 0;
  };

  return (
    <body>
      <div className="container">
        <header>
          <h1>Create your account</h1>
        </header>
        <form>
          <input type="text" placeholder="Name" maxlength="50" />
          <input id="change" type="text" placeholder="Phone" />
        </form>
        <a
          className="a"
          onClick={() => {
            type == 0 ? ChangeToEmail() : ChangeToPhone();
          }}
        >
          Use email instead
        </a>
        <h4>Date of birth</h4>
        <p>
          This will not be shown publicly. Confirm your own age, even if this
          account is for a business, a pet, or something else.
        </p>
        <form>
          <div className="Dropdown">
            <select className="month">
              <option value="Month">Month</option>
            </select>
            <select className="day">
              <option value="Day">Day</option>
            </select>
            <select className="year">
              <option value="Year">Year</option>
            </select>
          </div>
        </form>
        <button className="next-btn">Next</button>
      </div>
    </body>
  );
};

export default SignUp;
