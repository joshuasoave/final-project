import React from 'react';
import {Link} from 'react-router-dom';


class Exhibits extends React.Component{
  render() {
    return (
      <div className="exhibits">
        <h3>Exhibitions</h3>
        <ul className="allExhibits">
          <li>
            <div className="exhibitNavContainer">
              <Link to="/featured">
                <img src="https://i.imgur.com/SO1CULX.jpg" alt="Image of Leap frog that takes user to featured exhibit when clicked"/>
                <p>Featured Exhibit</p>
              </Link>
            </div>
          </li>
          <li>
            <div className="exhibitNavContainer">
              <Link to="/egypt">
                <img src="https://i.imgur.com/VBtGgr9.jpg" alt="picture of the Egyptian artifact that when clicked will take the user to Egypt exhibit"/>
                <p>Ancient Egypt</p>
              </Link>
            </div>
          </li>
          <li>
            <div className="exhibitNavContainer">
              <Link to="/surrealism">
                <img src="https://i.imgur.com/2IwffvO.jpg" alt="picture from the surrealism exhibit that takes a user to the surrealism exhibit when clicked"/>
                <p>Surrealism</p>
              </Link>
            </div>
          </li>
          <li>
            <div className="exhibitNavContainer">
              <Link to="/space">
                <img src="https://i.imgur.com/rp8jzSx.jpg" alt="picture from the space exhibit that takes the user to space exhibit when clicked"/>
                <p>Space</p>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Exhibits;
