import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <p>This is the home page</p>
        <ul>
          <li><Link to="/featured">Featured Exhibit</Link></li>
          <li><Link to="/exhibits">Exhibitions</Link></li>
          <li><Link to="/events">Events</Link></li>
        </ul>
      </div>
    )
  }
}

export default Home;
