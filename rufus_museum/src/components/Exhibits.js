import React from 'react';
import {Link, Router} from 'react-router-dom';
import Featured from './Featured.js';
import Egypt from './Egypt.js';
import Surrealism from './Surrealism.js';
import Space from './Space.js';


class Exhibits extends React.Component{
  render() {
    return (
      <div className="exhibits">
        <ul>
          <h3>Exhibitions</h3>
          <li><Link to="/featured">Featured Exhibit</Link></li>
          <li><Link to="/egypt">Ancient Egypt</Link></li>
          <li><Link to="/surrealism">Surrealism</Link></li>
          <li><Link to="/space">Space</Link></li>
        </ul>
      </div>
    )
  }
}

export default Exhibits;
