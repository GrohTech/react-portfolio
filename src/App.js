import React from 'react';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
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
        <Switch>
          <Route 
            exact path="/about" component={About}
          />
          <Route 
            exact path="/projects" component={Projects}
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