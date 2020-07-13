import React from 'react';
import axios from 'axios';

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
                <img src={artifact.image} alt={artifact.name}/>
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
