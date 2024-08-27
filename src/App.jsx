import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import HomePage from "./components/homePage";
import NavBar from "./components/navBar";
import ProductList from "./components/productList";
import LoginForm from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";
import CheckOut from "./components/CheckOut";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <>
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route path="/register" Component={Register}></Route>
        <Route path="/login" Component={LoginForm}></Route>
        <Route path="/cart" Component={Cart}></Route>
        <Route path="/check-out" Component={CheckOut}></Route>
        <Route path="/" Component={ProductList}></Route>
      </Routes>
    </>
  );
}

export default App;
