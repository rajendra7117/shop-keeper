import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SideBar from "./components/Navigation/SideBar";
import Header from "./components/Navigation/Header";
import "./globalstyles/styles.css";
import Layout from "./components/layout/Layout";
import Signin from "./components/auth/Signin";
import Login from "./components/auth/Login";
import Sigin2 from "./components/auth/Sigin2";

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
            <Route path="/login" element={<Login />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
