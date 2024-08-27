import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../fakeStore";
import { setSelectedCategory } from "./categorySelectedSlice";
import "./navBar.css";

function NavBar(props) {
  const selectedCategory = useSelector(
    (state) => state.categorySelected.selectedCategory
  );
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(["All Category", ...getCategories()]);
  }, []);

  const handleSelectedCategory = (category) => {
    dispatch(setSelectedCategory(category));
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link id="brand" className="navbar-brand">
          Aruna's Shopping Point
        </Link>

        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="search-btn" type="submit"></button>
        </form>

        <div className="category">
          {categories.map((category) => (
            <div
              key={category}
              onClick={() => handleSelectedCategory(category)}
              className={
                category === selectedCategory
                  ? category + " selected"
                  : category
              }
            >
              <span>{category}</span>
            </div>
          ))}
        </div>

        <div className="navbar-nav">
         
          <NavLink className="nav-link" to="/login">
            <i className="fa fa-sign-in">
              <span className="lg">Login</span>
            </i>
          </NavLink>
          
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
