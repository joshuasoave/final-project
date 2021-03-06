import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import {Icon} from 'react-materialize';

class Space extends React.Component {
  state = {
    space: []
  }

  /////////
  //call database
  ////////
  callDatabase = () => {
    return `http://localhost:5000`
  }

    //gets data from the api with the theme of space and sets that to the state
  componentDidMount = () => {
    axios.get(`${this.callDatabase()}/artifacts/space`).then(
      (response) => {
        this.setState({
          space:response.data
        })
      }
    )
  }

  render() {
    return (
      <div>
        <h2 className="exhibitHeading">Planetarium</h2>
        <ul className="allExhibits">
        {
          this.state.space.map (
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

export default Space;
