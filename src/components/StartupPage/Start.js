import React from "react";
import "./stylez.css";
import { useNavigate  } from "react-router-dom";
const Start = () => {
  let history = useNavigate();
  return (
    <div className="Startf1">
      <div className="containerf1">
        <div className="imagef1"></div>
        <div className="contentf1">
          <h1 className="h1f1">Happening now</h1>
          <h3 className="h3f1">Join Sirius today.</h3>
          <div className="buttonf1">
            <a href="#" className="btnf1">
              Sign up with Google
            </a>
            <a href="#" className="btnf1 signupfacebook">
              Sign up with Facebook
            </a>
            <p>
              <span>or</span>
            </p>
            <a
              onClick={() => {
                history.push("/signup");
              }}
              href="#"
              className="btn-signupf1"
            >
              Sign up with phone or email
            </a>
            <p className="termsf1">
              By signing up, you agree to the
              <a href="#"> Terms of Service </a>
              and <a href="#"> Privacy Policy </a>, including
              <a href="#"> Cookie Use </a>.
            </p>
            <h2 className="alreadyf1">Already have an account?</h2>

            <a
              onClick={() => {
                history.push("./login");
              }}
              href="#"
              className="btn-loginf1"
            >
              Sign in
            </a>
          </div>
        </div>

        <div className="footerf1">
          <nav>
            <a className="af1" href="#">About</a>
            <a className="af1" href="#">help center</a>
            <a className="af1" href="#">terms of service</a>
            <a className="af1" href="#">privacy policy</a>
            <a className="af1" href="#">cookie policy</a>
            <a className="af1" href="#">Accessibility</a>
            <a className="af1" href="#">ads info</a>
            <a className="af1" href="#">blog</a>
            <a className="af1" href="#">status</a>
            <a className="af1" href="#">careers</a>
            <a className="af1" href="#">brand resources</a>
            <a className="af1" href="#">advertising</a>
            <a className="af1" href="#">marketing</a>
            <a className="af1" href="#">twitter for business</a>
            <a className="af1" href="#">developers</a>
            <a className="af1" href="#">directory</a>
            <a className="af1" href="#">settings</a>
          </nav>
          <footer className="footerf1">&copy; 2022 Sirius, Inc.</footer>
        </div>
      </div>
    </div>
  );
};
export default Start;
