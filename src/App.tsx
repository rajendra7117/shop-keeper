import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SideBar from "./components/Navigation/SideBar";
import Header from "./components/Navigation/Header";
import "./globalstyles/styles.css";
import Layout from "./components/layout/Layout";
import Signin from "./components/auth/Signin";

import Sigin2 from "./components/auth/Sigin2";
import ConfigureShop from "./components/shop/ConfigureShop";
import AllProducts from "./components/shop/AllProducts";
import ProductForm from "./components/shop/ProductForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <SideBar />
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Signin />} />
            <Route path="/signin" element={<Sigin2 />}/>
            <Route path="/login" element={<Sigin2 />} />
            <Route path="/configure" element={<ConfigureShop />}/>
            <Route path="/products/" element={<AllProducts />} />
            <Route path="/add-product" element={<ProductForm />}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
