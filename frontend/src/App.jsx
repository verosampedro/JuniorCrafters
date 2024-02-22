import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import ContactForm from './pages/ContactForm/ContactForm';
import Description from './pages/Description/Description';
import Header from "./components/organisms/Header/Header";
import { CartProvider } from "./CartContext";
import EasterEgg from "./pages/EasterEgg/FlipatedVerse";
// import Home from "./pages/home/Home";


function App() {


  return (
    <>
      <Router>
        <CartProvider>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />}/> */}
          <Route path="/contact" element={<ContactForm />}/>
          <Route path="/description" element={<Description />}/>
          <Route path="/multiverse" element={<EasterEgg />} />
        </Routes>
      </CartProvider>
      </Router>
    </>
  )
}

export default App
