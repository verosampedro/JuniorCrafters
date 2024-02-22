import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import ContactForm from './pages/ContactForm/ContactForm';

import Description from './components/atoms/Description.jsx';




function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/contact" element={<ContactForm />}/>
        </Routes>
      </Router>
      <>
        <h1></h1>
        <Description />
        
      </>

    </>
  )
}

export default App
