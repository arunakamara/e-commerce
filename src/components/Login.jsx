import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import withNavigateHook from "./hoc/withNavigateHook";
import "./loginForm.css";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
    hasLoggedIn: false,
  };
  schema = {
    username: Joi.string().email().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  

  doSubmit = () => {

    //logic for authentication

    
    this.props.navigation("/product-list", { replace: true });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="forms-wrapper">
          <form
            className="login-form"
            autoComplete="off"
            onSubmit={this.handleSubmit}
          >
            <h2>Login In</h2>
            {this.renderInput("username", "Username")}
            {this.renderInput("password", "Password")}
            {this.renderButton("login", "login-btn")}
          </form>
        </div>
      </div>
    );
  }
}

export default withNavigateHook(LoginForm);
