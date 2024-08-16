import React from "react";

function Input({ name, label, error, ...rest }) {
  return (
    <div className="inputs-wrapper">
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        name={name}
        autoFocus={name === "username" ? true : false}
        id={name}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

export default Input;

