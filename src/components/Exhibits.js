import React from 'react';
import {Link} from 'react-router-dom';
import {Icon} from 'react-materialize';

class Exhibits extends React.Component{
  render() {
    return (
      <div className="exhibitsNavPage">
          <h2 className="exhibitHeading">Exhibitions</h2>
        <ul>
          <li>
            <Link to="/featured">
              <div className="exhibitNavImg" id="featuredExhibitsPageImg">
                <p className="img-text">Featured Exhibit</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/egypt">
              <div className="exhibitNavImg" id="egyptExhibitsPageImg">
                <p className="img-text">Ancient Egypt</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/surrealism">
              <div className="exhibitNavImg" id="surrealismExhibitsPageImg">
                <p className="img-text">Surrealist Art</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/space">
              <div className="exhibitNavImg" id="spaceExhibitsPageImg">
                <p className="img-text">Planetarium</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Exhibits;
