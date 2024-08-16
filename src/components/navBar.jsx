import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navBar.css";
function NavBar(props) {
  // const navLinkStyle = {
  //   margin: '0 5px',
  //   padding: '2px 8px',
  //   color: 'white',
  //   textDecoration: 'none',
  //   backgroundColor: 'midnightblue',
  //   border: '1px solid black',
  //   borderRadius: '4px'
  // }
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link id="brand" className="navbar-brand">
          Aruna's Shopping Point
        </Link>

        <div className="navbar-nav">
          <NavLink className="nav-link" to="/e-commerce">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/e-commerce/product-list">
            ProductList
          </NavLink>
          <NavLink className="nav-link" to="/e-commerce/login">
            {" "}
            Login
          </NavLink>
          <NavLink className="nav-link" to="/e-commerce/register">
            Register
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
