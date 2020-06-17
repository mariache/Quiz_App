import React, { Component } from "react";
import classes from "./Auth.module.css";
import { Button } from "../../components/ui/button/Button";

export class Auth extends Component {
  loginHandler = () => {};

  registerHandler = () => {};

  submitHandler = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Autorisation</h1>

          <form onSubmit={this.submitHandler} className={classes.AuthForm}>
            <input type="text" />
            <input type="text" />

            <Button type="success" onClick={this.loginHandler}>
              Sign in
            </Button>

            <Button type="primary" onClick={this.registerHandler}>
              Sign up
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Auth;
