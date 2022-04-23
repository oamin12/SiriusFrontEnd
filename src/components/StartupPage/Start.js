import React from "react";
import "./stylez.css";
import background from "./Images/whatshappening.png";
import { NavLink, useNavigate } from "react-router-dom";
const Start = () => {
  let history = useNavigate();
  return (
    <div className="Start">
      <div className="upf1">
        <div className="rightf1">
          <img className="backf1" src={background} />
        </div>
        <div className="leftf1">
          <h1 className="h1f1">Happening now</h1>
          <h3 className="h3f1">Join Sirius today.</h3>
          <button className="signupgooglef1">Sign up with Google</button>
          <button className="signupfacebookf1"> Sign up with Facebook </button>
          <p className="pf1">
            <span className="spf1">or</span>
          </p>
          <NavLink to="/adminView/dashboard">
          <button className="signupf1">Sign up with phone or email</button>
          </NavLink>
            <p className="terms">
            By signing up, you agree to the
            <a className="tos" href="#">
              {" "}
              Terms of Service{" "}
            </a>
            and{" "}
            <a className="tos" href="#">
              {" "}
              Privacy<br></br> Policy{" "}
            </a>
            , including
            <a className="tos" href="#">
              {" "}
              Cookie Use{" "}
            </a>
            .
          </p>
          <h2 className="alreadyf1">Already have an account?</h2>
          <NavLink to = "/home"><button className="loginf1">Sign in</button></NavLink>
        </div>
      </div>
      <div className="footerf1">
        <nav>
          <a className="a1f1" href="#">
            About
          </a>
          <a className="a1f1" href="#">
            Help Center
          </a>
          <a className="a1f1" href="#">
            Terms of Service
          </a>
          <a className="a1f1" href="#">
            Privacy Policy
          </a>
          <a className="a1f1" href="#">
            Cookie Policy
          </a>
          <a className="a1f1" href="#">
            Accessibility
          </a>
          <a className="a1f1" href="#">
            Ads Info
          </a>
          <a className="a1f1" href="#">
            Blog
          </a>
          <a className="a1f1" href="#">
            Status
          </a>
          <a className="a1f1" href="#">
            Careers
          </a>
          <a className="a1f1" href="#">
            Brand Resources
          </a>
          <a className="a1f1" href="#">
            Advertising
          </a>
          <a className="a1f1" href="#">
            Marketing
          </a>
          <a className="a1f1" href="#">
            Twitter for Business
          </a>
          <a className="a1f1" href="#">
            Developers
          </a>
          <a className="a1f1" href="#">
            Directory
          </a>
          <a className="a1f1" href="#">
            Settings
          </a>
        </nav>
        <footer className="copyf1">&copy; 2022 Sirius, Inc.</footer>
      </div>
    </div>
  );
};
export default Start;