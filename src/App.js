import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  const socialMedia = {
    instagram: "https://www.instagram.com/andrewsimmanuvel/",
    email: "andrewsimmanuvel056@gmail.com",
    linkedin: "https://www.linkedin.com/in/andrews-immanuvel-670822328",
    twitter: "", // Leave empty if not available
  };//this is the app component
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer socialMedia={socialMedia} />
    </Router>
  );
};

export default App;
