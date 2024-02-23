import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import ContactForm from './pages/ContactForm/ContactForm';

import Header from "./components/organisms/Header/Header";
import { CartProvider } from "./CartContext";
import EasterEgg from "./pages/EasterEgg/FlipatedVerse";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import Product from "./pages/Product/Product";

function App() {
  return (
    <>
      <Router>
        <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/> 
          <Route path="/contact" element={<ContactForm />}/>
          <Route path="/course/:valoration?" element={<Courses/>} />
          <Route path="/multiverse" element={<EasterEgg />} />
          <Route path="/product/:productId" element= {<Product />} />
          
       
        </Routes>
      </CartProvider>
      </Router>
    </>
  )
}
export default App
