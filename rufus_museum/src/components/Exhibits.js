import React from 'react';
import {Link} from 'react-router-dom';


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
