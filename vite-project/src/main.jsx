import React from "react";
import ReactDOM from "react-dom/client";
import AddProduct from './AddProduct.jsx'
import AddCategory from "./AddCategory.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/add" element={<AddProduct />}></Route>
    <Route path="/product/add" element={<AddProduct />}></Route>
    <Route path="/category/add" element={<AddCategory />}></Route>
  </Routes>
</BrowserRouter>
)