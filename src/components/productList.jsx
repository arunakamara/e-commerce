import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

// import axios from "axios";
import { getProducts, getCategories } from "../fakeStore";
import withNavigateHook from "./hoc/withNavigateHook";
import "./productList.css";

function ProductList(props) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Category");
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.items.length);
  const [addedToCart, setAddedToCart] = useState([]);

  useEffect(() => {
    // async function getProducts() {
    //   const { data } = await axios.get("https://fakestoreapi.com/products");
    //   setProducts(data);
    // }
    // getProducts();
    setProducts(getProducts());
    setCategories(["All Category", ...getCategories()]);
  }, []);

  const handleCartClick = (e) => {
    e.preventDefault();
    props.navigation("/e-commerce/cart");
  };

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedToCart([...addedToCart, product]);
  };

  const alreadyInCart = (product) => {
    return addedToCart.find((p) => p.id === product.id);
  };

  const handleSelectedCategory = (category) => {
    setSelectedCategory(category);
    console.log(selectedCategory);
  };

  const filteredProducts =
    selectedCategory !== "All Category"
      ? products.filter((product) => product.category === selectedCategory)
      : products;

  return (
    <div>
      <header className="product-list-heading">
        <h1>Product Lists</h1>
        <button onClick={(e) => handleCartClick(e)} className="cart-btn">
          <i className="fa fa-shopping-cart">
            <span className="cart-count">{cartCount}</span>
          </i>
        </button>
      </header>

      <div className="row">
        <div className="col-2">
          <ul className="list-group">
            {categories.map((category) => (
              <li
                key={category}
                onClick={() => handleSelectedCategory(category)}
                className={
                  category === selectedCategory
                    ? "list-group-item active"
                    : "list-group-item"
                }
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="col">
          <div className="product-container">
            {filteredProducts.map((product) => (
              <div key={product.id} className="card">
                <div className="product-title">{product.title}</div>
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.title}
                />
                <div className="product-price">${product.price}</div>
                <div className="product-description">{product.description}</div>
                <button
                  disabled={alreadyInCart(product)}
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default withNavigateHook(ProductList);
