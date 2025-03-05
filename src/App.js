import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./App.css"

function App() {
  return (
      <Router>
        <Navbar />
          <div className="appjsbody">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/portfolio" element={<PortfolioPage />} />
                  <Route path="/contact" element={<ContactPage />} />
              </Routes>
              <Footer />

          </div>

      </Router>
  );
}

export default App;