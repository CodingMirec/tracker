import React from "react";
import { Link, useHistory } from "react-router-dom";

import "./Login.css";

function Login() {
  const history = useHistory();

  return (
    <div className="login">
      <h1>Login</h1>
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon_logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
      </div>
    </div>
  );
}

export default Login;
