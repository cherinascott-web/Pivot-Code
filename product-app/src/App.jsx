import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";

import Home from "./screens/Home";
import Details from "./screens/Details";
import CategoryPage from "./screens/CategoryPage";
import Cart from "./screens/Cart";
import Checkout from "./screens/Checkout";

/* TOASTIFY */
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cart, setCart] = useState([]);

  function addToCartHandler(product) {
    setCart((prevCart) => [...prevCart, product]);

    /* GREEN POPUP */
    toast.success("Added to cart 🛒");
  }

  return (
    <>
      <Header cart={cart} />

      <ToastContainer />

      <div className="main-container">
        <Routes>
          <Route
            path="/"
            element={<Home addToCartHandler={addToCartHandler} />}
          />

          <Route
            path="/product/:id"
            element={<Details addToCartHandler={addToCartHandler} />}
          />

          <Route
            path="/category/:name"
            element={<CategoryPage addToCartHandler={addToCartHandler} />}
          />

          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />

          <Route
            path="/checkout"
            element={<Checkout cart={cart} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;