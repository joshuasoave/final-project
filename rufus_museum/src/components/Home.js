import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Featured from './Featured.js';
import Egypt from './Egypt.js';
import Surrealism from './Surrealism.js';
import Space from './Space.js';

class Home extends React.Component {
  render() {
    return (
    <Router>
      <div>
        <p>This is the home page</p>
        <nav>
          <ul>
            <h3>Exhibitions</h3>
            <li><Link to="/featured">Featured Exhibit</Link></li>
            <li><Link to="/egypt">Ancient Egypt</Link></li>
            <li><Link to="/surrealism">Surrealism</Link></li>
            <li><Link to="/space">Space</Link></li>
            </ul>
        </nav>
      <Route path="/featured" component={Featured}/>
      <Route path="/egypt" component={Egypt} />
      <Route path="/surrealism" component={Surrealism} />
      <Route path="/space" component={Space} />
      </div>
    </Router>
    )
  }
}

export default Home;
