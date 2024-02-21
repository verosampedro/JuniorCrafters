import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import ContactForm from './pages/ContactForm/ContactForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/contact" element={<ContactForm />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
