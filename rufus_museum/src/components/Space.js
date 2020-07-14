import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class Space extends React.Component {
  state = {
    artifacts: [],
    space: []
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
  //get all the space type artifacts
  getSpace = () => {
    this.state.artifacts.map(
      (artifact) => {
        //if the artifact theme is Space push it into the space array so we can use it in the page
        if(artifact.theme === "Space"){
          this.state.space.push(artifact)
        }
      }
    )
  }
  render() {
    return (
      <div>
      {this.getSpace()}
        <p>This is the Space exhibit.</p>
        <ul>
        {
          this.state.space.map (
            (artifact, index) => {
              return<div key={index}>
                <p>{artifact.name}</p>
                <Link to={{
                  pathname: `/exhibit/${artifact._id}`,
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
