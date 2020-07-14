import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class Featured extends React.Component {
  state = {
    artifacts: [],
    featured: []
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

  //get all the artifacts with type of featured
  getFeatured = () => {
    this.state.artifacts.map(
      (artifact) => {
        //if the artifact theme is Featured push it into featured so we can use it in the page
        if(artifact.theme === "Featured"){
          this.state.featured.push(artifact)
        }
      }
    )
  }

  render() {
    // console.log(this.state.artifacts);
    return (
      <div>
      {this.getFeatured()}
        <p>This is the Featured exhibit page</p>
        <ul>
        {
          this.state.featured.map (
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

export default Featured;
