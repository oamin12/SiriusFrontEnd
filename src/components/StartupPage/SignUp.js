import React, { useState } from "react";
import "./SignUp.css";
import greyback from "./Images/grey.png";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { ErrorSharp } from "@mui/icons-material";
import axios from "axios";
/**
 * @description Component that contains the sign up form in which the user makes sure the enters the dersired username, email and birthday.
 * @returns {div}
 */ 
const SignUp = () => {
  let navigate = useNavigate();

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

  

  // const name = document.querySelector(".namef3");
  // const email = document.querySelector(".emailf3");
  // const msg = document.querySelector(".msg");
  // const btn = document.querySelector(".nextbtnf3");

  // btn.addEventListener("click", () => {
  //   if (name.value === "" || email.value === "") {
  //     msg.classList.add("errorf3");
  //     msg.innerHTML = "Please enter all fields";
  //     // Remove error after 3 seconds
  //     setTimeout(() => msg.remove(), 3000);
  //   }
  // });
  // const date = document.querySelector(".dateboxf3");
  // date.addEventListener("input", (event) => {
  //   event.target.value = "";
  // });
  const Data = {
    username: "",
    name: "",
    email: "",
    password: "",
    birthdate: "",
    country: "",
    city: "",
  };
  const [dataValues, setData] = useState(Data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...dataValues, [name]: value });
  };

  async function SignUp() {
    let response = '';
    try {
      response = await axios.post('http://34.236.108.123:3000/signup',{username:dataValues.username,name:dataValues.name,email:dataValues.email,password:dataValues.password,birthdate:dataValues.birthdate,country:dataValues.country,city:dataValues.city}).then((res) => res.data);
      if(response.status==="success")
      {
        navigate("/signup/verify");
      }
      return (response.data);
    } catch (error) {
      if (error.response) {
        console.log(error.response);
        return (error.response);
      }
    }
    console.log(response);
    return (response);
  }

  const  handleNext = (e) => {
    
    SignUp();

    e.preventDefault();
    // Login(SignInState);
  };


  return (
    <div className="SignUp">
      <img className="backf3" src={greyback} alt="Grey Background" />
      <form className="containerf3">
        {/* <pre>{JSON.stringify(dataValues, undefined, 2)}</pre> */}
        {/*This pre shows the data in json format*/}
        <CloseIcon className="closef3" onClick={() => navigate("/")} />
        <h1 className="h1f3">Create your account</h1>
        <input
          className="namef3"
          type="text"
          placeholder="Name"
          maxlength="50"
          value={dataValues.name}
          onChange={handleChange}
          name="name"
        />
        <input
          className="usernamef3"
          type="text"
          placeholder="Username"
          maxlength="50"
          value={dataValues.username}
          onChange={handleChange}
          name="username"
        />
        <input
          className="boxpp" // Password input box
          type={type}
          placeholder="Password"
          value={dataValues.password}
          onChange={handleChange}
          name="password"
        />
        <span onClick={passwordToggle} className="visiblep">
          <Icon icon={icon} />
        </span>
        <input
          className="emailf3"
          type="email"
          placeholder="Email"
          value={dataValues.email}
          onChange={handleChange}
          name="email"
        />
        <input
          className="countryf3"
          type="text"
          placeholder="Country"
          value={dataValues.country}
          onChange={handleChange}
          name="country"
        />
        <input
          className="cityf3"
          type="text"
          placeholder="City"
          value={dataValues.city}
          onChange={handleChange}
          name="city"
        />
        <input
          min="1902-01-01"
          max="2022-01-01"
          className="dateboxf3"
          type="date"
          value={dataValues.birthdate}
          onChange={handleChange}
          name="birthdate"
        ></input>
        <button onClick={handleNext} className="nextbtnf3">Next</button>
        <div class="msg"></div>
      </form>
    </div>
  );
};

export default SignUp;
