import React from 'react';
import axios from 'axios';

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
  getFeatured = (array) => {
    this.state.artifacts.map(
      (artifact) => {
        //if the artifact theme is Featured push it into featured so we can use it in the page
        if(artifact.Theme === "Featured"){
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
              <li>{artifact.Name}</li>
              <li>{artifact.Description}</li>
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
