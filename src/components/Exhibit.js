import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Exhibit extends React.Component{

  /////////
  //call database
  ////////
  callDatabase = () => {
    return "https://floating-bayou-96095.herokuapp.com"
  }

  //////////
  //Favoriting button clicked
  //////////

  favoriteArtifact = () => {
    //save the array to this variable so we dont have to keep typing it
    let currentFavs = this.props.loggedInUser.favorites
    //loop through the array of users current favs to compare the ids
    for(let i = 0; i < currentFavs.length; i++) {
      // console.log(currentFavs[i]._id);
      //if the current artifact is already in their array, unfavorite it. Check all of the current favorites by comparing ids.
      if(this.props.location.state.artifact._id === currentFavs[i]._id) {
        //function that removes it from favorites array
        this.removeFavorite(i)
        return null
      }
    }
    //add to favorites if it is not in the users array already. this function makes an api call to add artifact to the users favorite a
    this.addFavorite();
  }

  ///////
  //Add fav
  //////
    //this put request calls the database and tells it to update the favroties array by pushing it into the array
  addFavorite = () => {
    axios.put(`${this.callDatabase()}/users/exhibit/${this.props.location.state.artifact._id}`).then((response) => {
        console.log('adding to favs');
      //update the logged in user on app with new favs in their array
        this.props.getUser();
      // console.log(this.props.loggedInUser);
    })
  }

  ///////
  //unfavorite
  ////////
  removeFavorite = (index) => {
    //pass in the index in the url so we can use it in the db to splice
    axios.put(`${this.callDatabase()}/users/exhibit/remove/${index}`).then((response) => {
      console.log('removing at index' + index);
        //update the logged in user on app with new favs in their array
      this.props.getUser();
    })
  }


  render() {
    // console.log(this.props);
    //get most up to date info
    this.props.getUser()
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
