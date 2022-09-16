import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import HomePage from './pages/HomePage';
import SideBar from './components/Navigation/SideBar';
import Header from './components/Navigation/Header';
import './globalstyles/styles.css'
import Layout from './components/layout/Layout';

function App() {
  return (
    <div className="App">
   
      <BrowserRouter >
      <Layout>
      <SideBar />
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />}/>
        </Routes>
        </Layout>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
