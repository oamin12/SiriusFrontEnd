import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StartPage from "./StartPage";
import LoginForm from "./LoginForm";
import SignUp from "./SignUp";

function App() {
  const Clear = () => {
    document.querySelector(".boxf2").value = "";
    document.querySelector(".boxpf2").value = "";
    document.querySelector(".boxf2").focus();
  };
  const adminUser = {
    name: "Omar",
    password: "1234",
  };
  const [user, setUser] = useState({ name: "", password: "" });
  const [error, setError] = useState("");
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
      Clear();
    }
  };
  return (
    <div classname="App">
      {user.name != "" ? (
        <StartPage />
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}
export default App;
{
  /* <Router>
<Switch>
  <Route exact path="/" component={StartPage} />
  <Route exact path="/login" component={LoginForm} />
  <Route exact path="/signup" component={SignUp} />
</Switch>
</Router> */
}
