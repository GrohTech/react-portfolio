import React from 'react';
import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className = "App">
      <Router>
        <Header />
        <Navigation />
        <Switch>
          <Route 
            exact path="/about" component={About}
          />
          <Route 
            exact path="/project" component={Project}
          />
          <Route 
            exact path="/contact" component={Contact}
          />
          <Route 
            exact path="/resume" component={Resume}
          />
          <Route
            component={About}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;


// {/* <Header />
// <About />
// <Project />
// <Contact />
// <Resume />
// <Footer /> */}