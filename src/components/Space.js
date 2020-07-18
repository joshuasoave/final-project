import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class Space extends React.Component {
  state = {
    space: []
  }

    //gets data from the api with the theme of space and sets that to the state
  componentDidMount = () => {
    axios.get('/artifacts/space').then(
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
        <p>This is the Space exhibit.</p>
        <ul>
        {
          this.state.space.map (
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

export default Space;
