import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StartPage from "./StartPage";
import LoginForm from "./LoginForm";
import SignUp from "./SignUp";
import Home from "../Home/Home";
import { useNavigate } from "react-router-dom";

//Contains The Fake database data as admin user
function SignInRedirect() {
  const adminUser = {
    name: "Omar",
    password: "1234",
  };
  const [user, setUser] = useState({ name: "", password: "" });
  const [error, setError] = useState("");
  let navigate = useNavigate();

  const Login = (details) => {
    console.log(details);
    if (
      details.name == adminUser.name &&
      details.password == adminUser.password
    ) {
      setUser({
        name: details.name,
        password: details.password,
      });
    } else {
      setError("Wrong Username or Password!");
    }
  };
  return (
    <div classname="App">
      {user.name != "" ? navigate("/home") : <LoginForm Login={Login} error={error} />}
    </div>
  );
}
export default SignInRedirect;
{
  /* <Router>
<Switch>
  <Route exact path="/" component={StartPage} />
  <Route exact path="/login" component={LoginForm} />
  <Route exact path="/signup" component={SignUp} />
</Switch>
</Router> */
}
