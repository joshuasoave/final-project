import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class Surrealism extends React.Component {
  state = {
    surrealism: []
  }

  componentDidMount = () => {
    axios.get('/artifacts/surrealism').then(
      (response) => {
        this.setState({
          surrealism:response.data
        })
      }
    )
  }

  render() {
    return (
      <div>
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
