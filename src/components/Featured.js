import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import {Icon} from 'react-materialize';

class Featured extends React.Component {
  state = {
    featured: []
  }

  /////////
  //call database
  ////////
  callDatabase = () => {
    return "https://floating-bayou-96095.herokuapp.com"
  }

  //gets data from the api with the theme of featured and sets that to the state
  componentDidMount = () => {
    axios.get(`${this.callDatabase()}/artifacts/featured`).then(
      (response) => {
        this.setState({
          featured:response.data
        })
      }
    )
  }

  render() {
    return (
      <div>
        <h2 className="exhibitHeading">Zimbabwe Sculpture</h2>
        <ul className="allExhibits">
        {
          this.state.featured.map (
            (artifact, index) => {
              return<div key={index} className="exhibitNavContainer">
                <Link to={{
                  pathname: `/artifacts/exhibit/${artifact._id}`,
                  state: {artifact}
                }}>
                  <img src={artifact.image}
                  alt={artifact.name}/>
                  <p>{artifact.name}</p>
                </Link>
              </div>
            }
          )
        }
        </ul>
      </div>
    )
  }
}

export default Featured;
