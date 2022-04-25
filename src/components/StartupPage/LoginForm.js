import React, { useState } from "react";
import greyback from "./Images/grey.png";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { NavLink } from "react-router-dom";
const LoginForm = ({ Login, error }) => {
  const [details, setDetails] = useState({ name: "", password: "" });
  const sumbitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };
  let navigate = useNavigate();

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eye);

  const passwordToggle = () => {
    if (type == "password") {
      setIcon(eyeOff);
      setType("text");
    } else {
      setIcon(eye);
      setType("password");
    }
  };

  return (
    <div className="Login">
      <img className="backf2" src={greyback} />
      <form className="containerf2">
        <CloseIcon className="closef2" onClick={() => navigate("/")} />
        <h1 className="h1f2">Sign in to Sirius</h1>
        <button className="googlebtnf2">Sign in with Google</button>
        <button className="facebookbtnf2">Sign in with Facebook</button>
        <p class="orf2">
          <span class="linef2">or</span>
        </p>
        <input
          className="boxf2" // Username input box
          type="text"
          placeholder="Email address, or username"
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
          value={details.name}
        />
        <input
          className="boxpf2" // Password input box
          type={type}
          placeholder="Password"
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          value={details.password}
        />
        <span onClick={passwordToggle} className="visiblef2">
          <Icon icon={icon} />
        </span>

        <button
          onClick={sumbitHandler} // Next Button
          class="nextbtnf2"
        >
          Log in
        </button>
        <button onClick={() => navigate("/forgetpassword")} class="forgetf2">
          Forget password?
        </button>
        <p className="accountf2">
          Don't have an account?{" "}
          <a className="af2" href="#" onClick={() => navigate("/signup")}>
            Sign Up
          </a>
        </p>
        {error != "" ? (
          <div
            style={{
              marginBottom: "-600px",
              color: "red",
              position: "fixed",
            }}
            classname="errorf2"
          >
            {error}
          </div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default LoginForm;
