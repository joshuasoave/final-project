import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className="homeNavigation">
        <h4>This is the home page</h4>
        <ul>
          <li>
            <div id="featuredNavImg" className="homeNavContainer">
              <Link to="/featured">
                <p className="img-text">Featured Exhibit</p>
              </Link>
            </div>
          </li>
          <li>
            <div id="ourExhibits" className="homeNavContainer">
              <Link to="/exhibits">
                <p className="img-text">Our Exhibitions</p>
              </Link>
            </div>
          </li>
          <li>
            <div id="currentEvents" className="homeNavContainer">
              <Link to="/events">
              <p className="img-text">Current Events</p>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Home;
