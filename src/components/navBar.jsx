import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../fakeStore";
import { setSelectedCategory } from "./categorySelectedSlice";
import { setSearchQuery } from "./searchQuerySlice";
import { setShowCategory } from "./categorySelectedSlice";
import "./navBar.css";

function NavBar(props) {
  const selectedCategory = useSelector(
    (state) => state.categorySelected.selectedCategory
  );
  const searchQuery = useSelector((state) => state.searchedQuery.queries);
  const showCategory = useSelector(
    (state) => state.categorySelected.showCategory
  );
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(["All Category", ...getCategories()]);
  }, []);

  const handleSelectedCategory = (category) => {
    dispatch(setSelectedCategory(category));
    dispatch(setSearchQuery(""));
  };

  const handleSearch = (query) => {
    dispatch(setSearchQuery(query));
    dispatch(setSelectedCategory(null));
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
            placeholder="Search..."
            aria-label="Search"
            value={searchQuery}
            onChange={(e) => handleSearch(e.currentTarget.value)}
          />
          <button className="search-btn" type="submit"></button>
        </form>

        {showCategory && (
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
        )}

        <div className="navbar-nav">
          <NavLink className="nav-link" to="/login">
            <i
              className="fa fa-sign-in"
              onClick={() => dispatch(setShowCategory(false))}
            >
              <span className="lg">Login</span>
            </i>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
