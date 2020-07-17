import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class Featured extends React.Component {
  state = {
    featured: []
  }

  //gets data from the api with the theme of featured and sets that to the state
  componentDidMount = () => {
    axios.get('/artifacts/featured').then(
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
        <p>This is the Featured exhibit page</p>
        <ul>
        {
          this.state.featured.map (
            (artifact, index) => {
              return<div key={index}>
                <p>{artifact.name}</p>
                <Link to={{
                  pathname: `/artifacts/exhibit/${artifact._id}`,
                  state: {artifact}
                }}>
                <img src={artifact.image}
                 alt={artifact.name}/>
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
