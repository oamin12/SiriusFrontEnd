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
  const [signInStatus, setsignInStatus] = useState(false);

  let navigate = useNavigate();

  const Login = (signInState) => {
    
    setsignInStatus(signInState)
    // console.log(details);
    // if (
    //   details.name == adminUser.name &&
    //   details.password == adminUser.password
    // ) {
    //   setUser({
    //     name: details.name,
    //     password: details.password,
    //   });
    // } else {
    //   setError("Wrong Username or Password!");
    // }
  };

  // const [SignInToken,setSignInToken ] = React.useState();
  // React.useEffect(() => {
  //   (async () => {
  //     const resp = await SignIn();
  //     setSignInToken(resp);
  //   })();
  // }, []);
  // console.log(SignInToken);



  return (
    
    <div classname="App">
      {signInStatus ? navigate("/home") : <LoginForm Login={Login} error={error} />}
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
