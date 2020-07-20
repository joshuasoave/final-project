import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import {Icon} from 'react-materialize';

class Egypt extends React.Component {
  state = {
    egypt: []
  }

  /////////
  //call database
  ////////
  callDatabase = () => {
    return "https://cors-anywhere.herokuapp.com/https://floating-bayou-96095.herokuapp.com"
  }

  //gets data from the api with the theme of egypt and sets that to the state
  componentDidMount = () => {
    axios.get(`/artifacts/egypt`).then(
      (response) => {
        this.setState({
          egypt:response.data
        })
      }
    )
  }

  render() {
    return (
      <div>
        <h2 className="exhibitHeading">Ancient Egypt</h2>
        <ul className="allExhibits">
        {
          this.state.egypt.map (
            (artifact, index) => {
              return<div key={index} className="exhibitNavContainer">
                <Link to={{
                  pathname: `/artifacts/exhibit/${artifact._id}`,
                  state: {artifact}
                }}>
                  <img src={artifact.image} alt={artifact.name}/>
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

export default Egypt;
