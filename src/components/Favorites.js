import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Favorites extends React.Component{
  state = {
    favorites: []
  }

  componentDidMount = () => {
    //this get request asks the database for all favorites of this user
    axios.get(this.props.location.pathname).then((response) => {
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
        This is the favs page. dgdgg
        <ul>
        {
          this.state.favorites.map (
            (artifact, index) => {
              return<div key={index}>
                <p>{artifact.name}</p>
                <Link to={{
                  pathname: `/artifacts/exhibit/${artifact._id}`,
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

export default Favorites;
