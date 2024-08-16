import { Route, Routes } from "react-router-dom";
import HomePage from "./components/homePage";
import NavBar from "./components/NavBar";
import ProductList from "./components/productList";
import LoginForm from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart"
import "./App.css";
import CheckOut from './components/CheckOut';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/product-list" Component={ProductList}></Route>
        <Route path="/register" Component={Register}></Route>
        <Route path="/login" Component={LoginForm}></Route>
        <Route path="/cart" Component={Cart}></Route>
        <Route path="/check-out" Component={CheckOut}></Route>
        <Route path="/" Component={HomePage}></Route>
      </Routes>
    </>
  );
}

export default App;
