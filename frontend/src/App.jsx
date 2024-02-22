import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import ContactForm from './pages/ContactForm/ContactForm';
import Description from './components/atoms/Description';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/description" element={<Description />} />
        </Routes>
      </Router>
    </>
  )
}
export default App
