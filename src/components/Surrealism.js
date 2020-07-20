import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import {Icon} from 'react-materialize';

class Surrealism extends React.Component {
  state = {
    surrealism: []
  }

  /////////
  //call database
  ////////
  callDatabase = () => {
    return "https://floating-bayou-96095.herokuapp.com"
  }

    //gets data from the api with the theme of surrealism and sets that to the state
  componentDidMount = () => {
    axios.get(`${this.callDatabase()}/artifacts/surrealism`).then(
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
        <h2 className="exhibitHeading">Surrealist Art</h2>
        <ul className="allExhibits">
        {
          this.state.surrealism.map (
            (artifact, index) => {
              return <div key={index} className="exhibitNavContainer">
                <Link to={{
                  pathname: `/artifacts/exhibit/${artifact._id}`,
                  state: {artifact}
                }}>
                  <img src={artifact.image}
                 alt={artifact.name}/>
                   <p>{artifact.name}</p>
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
