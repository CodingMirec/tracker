import React from "react";
import { useHistory, Link } from "react-router-dom";
import { Button } from "@material-ui/core";

import "./Login.css";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function Login() {
  const history = useHistory();

  const login = () => {
    history.push("/");
  };

  //   const signIn = () => {
  //     auth.signInWithPopup(provider).catch((error) => alert(error.message));
  //   };

  return (
    <div className="login">
      <div className="login__container">
        <h1>Login</h1>
        <LockOpenIcon />
        <form className="login__form">
          <div className="login__form__info">
            <input placeholder="Email Adress" name="email" type="email" />
            <input placeholder="Password" type="password" />
            <div className="login__form__account">
              <FormControlLabel
                value="remember"
                control={<Checkbox color="primary" />}
                label="Remember me"
              />
              <Link to="/signUp">New Account?</Link>
            </div>
          </div>
          <Button onClick={login}>Sign In</Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
