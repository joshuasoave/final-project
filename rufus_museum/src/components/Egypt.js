import React from 'react';
import axios from 'axios';
import Exhibit from './Exhibit.js'
import { Link, Router, Route } from "react-router-dom";

class Egypt extends React.Component {
  state = {
    artifacts: [],
    egypt: []
  }

  componentDidMount = () => {
    axios.get('/artifacts').then(
      (response) => {
        this.setState({
          artifacts:response.data
        })
      }
    )
  }
  //get all the egypt type artifacts
  getEgypt = () => {
    this.state.artifacts.map(
      (artifact) => {
        //if the artifact theme is Egypt push it into the egypt array so we can use it on the page
        if(artifact.theme === "Egypt"){
          this.state.egypt.push(artifact)
        }
      }
    )
  }

  render() {
    this.getEgypt();
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
