import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

import "./Login.css";

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
      <h1>Login</h1>
      <form>
        <input placeholder="Email Adress" name="email" type="email" />
        <input placeholder="Password" type="password" />
        <label htmlFor="remember">
          <input type="checkbox" />
          Remember me
        </label>
        <Button ocClick={login}>Sign In</Button>
      </form>
    </div>
  );
}

export default Login;
