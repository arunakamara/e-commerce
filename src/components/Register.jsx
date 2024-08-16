import React from "react";
import Joi from "joi-browser";
import withNavigateHook from "./hoc/withNavigateHook";
import Form from "./common/form";
import "./loginForm.css";

class Register extends Form {
  state = {
    data: { name: "", email: "", password: "", confirmPassword: "" },
    errors: {},
  };

  schema = {
    name: Joi.string().required().label("Name"),
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().min(7).max(15).required().label("Password"),
    confirmPassword: Joi.any()
      .valid(Joi.ref("password"))
      .required()
      .options({ language: { any: { allowOnly: "must match password" } } }),
  };

  doSubmit = () => {
    console.log("Registerd");

    //logic for authentication
    this.props.navigation("/e-commerce/product-list", { replace: "true" });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="forms-wrapper">
          <form
            className="signup-form"
            autoComplete="off"
            onSubmit={this.handleSubmit}
          >
            <h2>Sign Up</h2>
            {this.renderInput("name", "Name")}
            {this.renderInput("email", "Email", "email")}
            {this.renderInput("password", "Password", "password")}
            {this.renderInput(
              "confirmPassword",
              "Confirm Password",
              "password"
            )}
            {this.renderButton("sign up", "signup-btn")}
          </form>
        </div>
      </div>
    );
  }
}

export default withNavigateHook(Register);
