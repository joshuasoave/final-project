import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class Surrealism extends React.Component {
  state = {
    artifacts: [],
    surrealism: []
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
  //get all the Surrealism artifacts
  getSurrealism = (array) => {
    this.state.artifacts.map(
      (artifact) => {
        //if the theme is Surrealism push it into the syrrealism array so we can use it on the page
        if(artifact.theme === "Surrealism"){
          this.state.surrealism.push(artifact)
        }
      }
    )
  }
  render() {
    return (
      <div>
      {this.getSurrealism()}
        <p>This is the Surrealism exhibit.</p>
        <ul>
        {
          this.state.surrealism.map (
            (artifact, index) => {
              return <div key={index}>
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

export default Surrealism;
