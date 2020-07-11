import React from 'react';
import Header from './components/Header.js';
import Home from './components/Home.js';
import About from './components/About.js';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav>
            <Header />
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
          <main>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </main>
        </div>
      </Router>
    )
  }
}

export default App;
