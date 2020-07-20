import React from 'react';
import { Link } from 'react-router-dom';
import {Icon} from 'react-materialize';

class Home extends React.Component {
  render() {
    return (
      <div className="homeNavigation">
        <h1 className="header">Rüfus Museum</h1>
          <ul>
            <li>
              <Link to="/featured">
                <div id="featuredNavImg" className="homeNavContainer">
                  <p className="img-text">Featured
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/exhibits">
                <div id="ourExhibits" className="homeNavContainer">
                  <p className="img-text">Exhibitions
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/events">
                <div id="currentEvents" className="homeNavContainer">
                  <p className="img-text">Events
                  </p>
                </div>
              </Link>
            </li>
          </ul>
      </div>
    )
  }
}

export default Home;
