import React from 'react';
import Header from './components/Header.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Featured from './components/Featured.js';
import Egypt from './components/Egypt.js';
import Surrealism from './components/Surrealism.js';
import Space from './components/Space.js';
import Exhibit from './components/Exhibit.js';
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
            <Route path="/featured" component={Featured}/>
            <Route path="/egypt" component={Egypt} />
            <Route path="/surrealism" component={Surrealism} />
            <Route path="/space" component={Space} />
            <Route path="/exhibit/:id" component={Exhibit}/>
          </main>
        </div>
      </Router>
    )
  }
}

export default App;
