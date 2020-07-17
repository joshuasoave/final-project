import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Exhibit extends React.Component{

  //////////
  //Favoriting an artifact
  //////////

  favoriteArtifact = () => {
    // console.log(this.props.location.state.artifact);
    axios.put(`/users/exhibit/${this.props.location.state.artifact._id}`).then((response) => {
      console.log(response);
      //update the logged in user on app with new favs in their array
      this.props.getUser()
    })
  }


  render() {

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
    <button onClick={this.favoriteArtifact}>Fav</button>
    <h1>{artifact.name}</h1>
    <img src={artifact.image} alt={artifact.name} />
    <p>{artifact.creator}</p>
    <p>{artifact.year}</p>
    <p>{artifact.description}</p>
    </div>
  }
}

export default Exhibit;
