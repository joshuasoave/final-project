import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Exhibit extends React.Component{

  //////////
  //Favoriting button clicked
  //////////

  favoriteArtifact = () => {
    // console.log(this.props);
    //get most up to date info
    this.addFavorite();
    //check all the items in the users current favorites
    for(let currentFavs of this.props.loggedInUser.favorites) {
      //if the current artifact is already in their array, unfavorite it. Check all of the current favorites by comparing ids.
      if(this.props.location.state.artifact._id === currentFavs._id) {
        console.log('unfavorite')
      }
    }
  }

  ///////
  //Add fav
  //////
    //this put request calls the database and tells it to update the favroties array by pushing it into the array
  addFavorite = () => {
    axios.put(`/users/exhibit/${this.props.location.state.artifact._id}`).then((response) => {
      console.log(response);
      //update the logged in user on app with new favs in their array
      this.props.getUser()
      console.log(this.props.loggedInUser);
    })
  }



  render() {
    // console.log(this.props);
    //save prop location state so we dont have to keep typing that out. This is the artifact that the user clicked on from previous page
    let artifact = this.props.location.state.artifact;
    // console.log(this.props);
    return <div>
    Exhibit page
    <Link to={{
      pathname:`/${artifact.theme}`
    }}>
    <button>Back</button>
    </Link>
    {
      this.props.loggedInUser ?
      <button onClick={this.favoriteArtifact}>Fav</button>
        :
        " "
    }
    <h1>{artifact.name}</h1>
    <img src={artifact.image} alt={artifact.name} />
    <p>{artifact.creator}</p>
    <p>{artifact.year}</p>
    <p>{artifact.description}</p>
    </div>
  }
}

export default Exhibit;
