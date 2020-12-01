import React from "react";
import { useHistory, Link } from "react-router-dom";
import { Button } from "@material-ui/core";

import "./Register.css";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function Register() {
  const history = useHistory();

  const register = () => {
    history.push("/");
  };

  //   const signIn = () => {
  //     auth.signInWithPopup(provider).catch((error) => alert(error.message));
  //   };

  return (
    <div className="register">
      <div className="register__container">
        <h1>Register</h1>
        <LockOpenIcon />
        <form className="register__form">
          <div className="register__form__info">
            <div className="register__form__name">
              <input placeholder="First Name" name="name" />
              <input placeholder="Last Name" name="name" />
            </div>
            <input placeholder="Email Adress" name="email" type="email" />
            <input placeholder="Password" type="password" />
            <input placeholder="Confirm Password" type="password" />
            <div className="register__form__account">
              <FormControlLabel
                value="remember"
                control={<Checkbox color="primary" />}
                label="Remember me"
              />
              <Link to="/login">Already registered?</Link>
            </div>
          </div>
          <Button onClick={register} type="submit">
            Sign In
          </Button>
          <Button type="submit">Sign In With Google</Button>
        </form>
      </div>
    </div>
  );
}

export default Register;
