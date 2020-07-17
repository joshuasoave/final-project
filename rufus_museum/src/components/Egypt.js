import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class Egypt extends React.Component {
  state = {
    egypt: []
  }


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
        <ul>
        {
          this.state.egypt.map (
            (artifact, index) => {
              return<div key={index}>
                <p>{artifact.name}</p>
                <Link to={{
                  pathname: `/exhibit/${artifact._id}`,
                  state: {artifact}
                }}>
                  <img src={artifact.image} alt={artifact.name}/>
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
