import React, { useState } from "react";
import greyback from "./Images/grey.png";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { NavLink } from "react-router-dom";
import axios from "axios";
/**
 * @description Component that renders the Login Page which contains the username input area, password input area and all the required logic to authenticate the user
 * @returns {div}
 */
const LoginForm = () => {
  const [details, setDetails] = useState({ name: "", password: "" });
  const [SignInToken, setSignInToken] = React.useState();
  const [SignInState, setSignInState] = React.useState("");
  const [errorName, setError] = useState("");

  let navigate = useNavigate();

  async function SignIn() {
    let response = "";
    try {
      response = await axios
        .post("http://34.236.108.123:3000/login", {
          email: details.name,
          password: details.password,
        })
        .then((res) => res.data);
      sessionStorage.setItem("tokenValue", response.token);
      if (response.status === "Success") {
        navigate("/home");
      }
      // setSignInState(response.status);
      //console.log("SUCCESS",response.status);

      return response.data;
    } catch (error) {
      if (error.response) {
        setError("Email or Password is Incorrect!");
        console.log(error.response);
        return error.response;
      }
    }
    console.log(response);
    return response;
  }
  function handleEnter(event) {
    if (event.key === "Enter") {
      if (details.name === "" || details.password === "") {
        setError("Email or Password cannot be empty!");
        event.preventDefault();

        return;
      }
      SignIn();

      event.preventDefault();
    }
  }
  const sumbitHandler = (e) => {
    if (details.name === "" || details.password === "") {
      setError("Email or Password cannot be empty!");
      e.preventDefault();

      return;
    }
    SignIn();

    e.preventDefault();
    // Login(SignInState);
  };

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eye);

  const passwordToggle = () => {
    if (type === "password") {
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
        <button onClick={() => navigate("/")} className="facebookbtnf2">
          Sign in with Facebook
        </button>
        <p class="orf2">
          <span class="linef2">or</span>
        </p>
        <input
          className="boxf2" // Username input box
          type="text"
          placeholder="Email address, or username"
          onChange={function func(e) {
            setDetails({ ...details, name: e.target.value });
          }}
          value={details.name}
        />
        <input
          className="boxpf2" // Password input box
          type={type}
          placeholder="Password"
          onKeyPress={handleEnter}
          onChange={function func(e) {
            setDetails({ ...details, password: e.target.value });
          }}
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
        {errorName != "" ? (
          <div
            style={{
              marginBottom: "-600px",
              textAlign: "center",
              color: "red",
              position: "fixed",
            }}
            classname="errorf2"
          >
            {errorName}
          </div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default LoginForm;
