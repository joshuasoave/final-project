import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className="homeNavigation">
        <h4>This is the home page</h4>
        <ul>
          <li>
            <Link to="/featured">
              <div id="featuredNavImg" className="homeNavContainer">
                <p className="img-text">Featured Exhibit</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/exhibits">
              <div id="ourExhibits" className="homeNavContainer">
                <p className="img-text">Our Exhibitions</p>
                </div>
            </Link>
          </li>
          <li>
            <Link to="/events">
              <div id="currentEvents" className="homeNavContainer">
                <p className="img-text">Current Events</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Home;
