import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Available from './pages/Available';
import Auctions from './pages/Auctions';
import BookAuction from './pages/BookAuction';
import PersonalTickets from './pages/PersonalTickets';
import Wallet from './pages/Wallets';
import FAQ from './pages/FAQ';

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
          <Route path="/bookauction" element={<BookAuction />}/>
          <Route path="/personaltickets" element={<PersonalTickets />}/>
          <Route path="/wallet" element={<Wallet />}/>
          <Route path="/faq" element={<FAQ />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
