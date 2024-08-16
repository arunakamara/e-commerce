import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "./components/homePage";
import NavBar from "./components/NavBar";
import ProductList from "./components/productList";
import LoginForm from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart"
import CheckOut from './components/CheckOut';
import 'react-toastify/dist/ReactToastify.css'
import "./App.css";

function App() {
  return (
    <>
    <ToastContainer/>
      <NavBar />
      <Routes>
        <Route path="/e-commerce/product-list" Component={ProductList}></Route>
        <Route path="/e-commerce/register" Component={Register}></Route>
        <Route path="/e-commerce/login" Component={LoginForm}></Route>
        <Route path="/e-commerce/cart" Component={Cart}></Route>
        <Route path="/e-commerce/check-out" Component={CheckOut}></Route>
        <Route path="/e-commerce" Component={HomePage}></Route>
      </Routes>
    </>
  );
}

export default App;
