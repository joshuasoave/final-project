import React from 'react';
import {Link} from 'react-router-dom';


class Exhibits extends React.Component{
  render() {
    return (
      <div className="exhibitsNavPage">
        <h3>Exhibitions</h3>
        <ul>
          <li>
            <Link to="/featured">
              <div className="exhibitNavImg" id="featuredExhibitsPageImg">
                <p className="img-text">Zimbabwe Sculpture</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/egypt">
              <div className="exhibitNavImg" id="egyptExhibitsPageImg">
                <p className="img-text">Ancient Egyptian Artifacts</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/surrealism">
              <div className="exhibitNavImg" id="surrealismExhibitsPageImg">
                <p className="img-text">Surrealism: Philosophy in Art</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/space">
              <div className="exhibitNavImg" id="spaceExhibitsPageImg">
                <p className="img-text">Visit our Planetarium</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Exhibits;
