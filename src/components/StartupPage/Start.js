import React from "react";
import "./stylez.css";
import background from "./Images/whatshappening.png";
import { useNavigate } from "react-router-dom";
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
          <a href="#" className="signup">
            Sign up with phone or email
          </a>
          <p className="terms">
            By signing up, you agree to the
            <a className="tos" href="#">
              {" "}
              Terms of Service{" "}
            </a>
            and{" "}
            <a className="tos" href="#">
              {" "}
              Privacy Policy{" "}
            </a>
            , including
            <a href="#"> Cookie Use </a>.
          </p>
          <h2 className="alreadyf1">Already have an account?</h2>
          <a href="#" className="login">
            Sign in
          </a>
        </div>
      </div>
      <div className="footerf1">
        <nav>
          <a className="a1f1" href="#">
            About
          </a>
          <a className="a1f1" href="#">
            help center
          </a>
          <a className="a1f1" href="#">
            terms of service
          </a>
          <a className="a1f1" href="#">
            privacy policy
          </a>
          <a className="a1f1" href="#">
            cookie policy
          </a>
          <a className="a1f1" href="#">
            Accessibility
          </a>
          <a className="a1f1" href="#">
            ads info
          </a>
          <a className="a1f1" href="#">
            blog
          </a>
          <a className="a1f1" href="#">
            status
          </a>
          <a className="a1f1" href="#">
            careers
          </a>
          <a className="a1f1" href="#">
            brand resources
          </a>
          <a className="a1f1" href="#">
            advertising
          </a>
          <a className="a1f1" href="#">
            marketing
          </a>
          <a className="a1f1" href="#">
            twitter for business
          </a>
          <a className="a1f1" href="#">
            developers
          </a>
          <a className="a1f1" href="#">
            directory
          </a>
          <a className="a1f1" href="#">
            settings
          </a>
        </nav>
        <footer className="copyf1">&copy; 2022 Sirius, Inc.</footer>
      </div>
    </div>
  );
};
export default Start;