import React from "react";
import facebook from "./Images/facebook.png";
import google from "./Images/google.png";
import "./style.css";
import { useNavigate  } from "react-router-dom";
const Login = () => {
  let history = useNavigate ();
  return (
    <div className="LoginF1">
      <div className="containerF1">
        <div className="box-oneF1">
          <h1 className="h1F1">Sign in to Sirius</h1>
          <button className="faceF1">
            <img className="imgF1" src={google} />
            <span>Sign in with Google</span>
          </button>
          <button class="appleF1">
            <img className="imgF1" src={facebook} />
            <span>Sign in with Facebook</span>
          </button>
        </div>
        <p className="orF1">
          <span className="lineF1">or</span>
        </p>
        <div className="box-twoF1">
          <form>
            <input type="text" placeholder="Phone,email, or username" />
          </form>
          <button className="next-btnF1">Next</button>
          <button className="forgetF1">Forget password?</button>
        </div>
        <p className="accountF1">
          Don't have an account?{" "}
          <a
            onClick={() => {
              history.push("./signup");
            }}
            href="#"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
