import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Available from './pages/Available';
import Auctions from './pages/Auctions';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/reports" element={<Reports />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/available" element={<Available />}/>
          <Route path="/auction" element={<Auctions />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
