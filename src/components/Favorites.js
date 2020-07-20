import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Icon} from 'react-materialize';


class Favorites extends React.Component{
  state = {
    favorites: []
  }

  /////////
  //call database
  ////////
  callDatabase = () => {
    return "https://cors-anywhere.herokuapp.com/https://floating-bayou-96095.herokuapp.com"
  }

  componentDidMount = () => {
    //this get request asks the database for all favorites of this user
    axios.get(`${this.callDatabase()}${this.props.location.pathname}`).then((response) => {
      // console.log(response.data.favorites);
      this.setState({
        favorites: response.data.favorites
      })
    })
  }


  render() {
    //to check the favorites of logged in user

    return (
      <div>
        <h2 className="exhibitHeading">Favorites</h2>
        <ul className="allExhibits">
        {
          this.state.favorites.map (
            (artifact, index) => {
              return<div key={index} className="exhibitNavContainer">

                <Link to={{
                  pathname: `/artifacts/exhibit/${artifact._id}`,
                  state: {artifact}
                }}>
                  <img src={artifact.image} alt={artifact.name}/>
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

export default Favorites;
