import React from 'react';
import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <div className = "App">
      <Header />
      <About />
      <Project />
      <Contact />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
