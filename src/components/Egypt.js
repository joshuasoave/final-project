import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class Egypt extends React.Component {
  state = {
    egypt: []
  }

  //gets data from the api with the theme of egypt and sets that to the state
  componentDidMount = () => {
    axios.get('/artifacts/egypt').then(
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
        <p>This is the Egypt page.</p>
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
