import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
// import axios from "axios";
import { getProducts, getCategories } from "../fakeStore";
import withNavigateHook from "./hoc/withNavigateHook";
import "./productList.css";
import Footer from "./Footer";

function ProductList(props) {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.items.length);
  const [addedToCart, setAddedToCart] = useState([]);
  const selectedCategory = useSelector(
    (state) => state.categorySelected.selectedCategory
  );
  useEffect(() => {
    // async function getProducts() {
    //   const { data } = await axios.get("https://fakestoreapi.com/products");
    //   setProducts(data);
    // }
    // getProducts();
    setProducts(getProducts());
  }, []);

  const handleToRegister = () => {
    props.navigation("/register");
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    props.navigation("/cart");
  };

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedToCart([...addedToCart, product]);
  };

  const alreadyInCart = (product) => {
    return addedToCart.find((p) => p.id === product.id);
  };

  const filteredProducts =
    selectedCategory !== "All Category"
      ? products.filter((product) => product.category === selectedCategory)
      : products;

  return (
    <div>
      <header className="product-list-heading">
        <h1>Product Lists</h1>
        <button onClick={(e) => handleCartClick(e)} className="cart-logo">
          <i className="fa fa-shopping-cart">
            <span className="cart-count">{cartCount}</span>
          </i>
        </button>
      </header>

      <div className="product-container">
        {filteredProducts.map((product) => (
          <div key={product.id} className="card">
            <div className="product-title">{product.title.slice(0, 11)}</div>
            <img
              className="product-image"
              src={product.image}
              alt={product.title}
            />
            <div className="product-price">${product.price}</div>
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
      <div>
        <hr />
        <p className="btn-text">
          To see personalized recommendations, create an account
        </p>
        <button className="register-btn" onClick={handleToRegister}>
          Create Account
        </button>
        <hr />
      </div>
      <Footer />
    </div>
  );
}

export default withNavigateHook(ProductList);
