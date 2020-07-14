import React from 'react';
import {Link} from 'react-router-dom';
class Exhibit extends React.Component{

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
    <h1>{artifact.name}</h1>
    <img src={artifact.image} alt={artifact.name} />
    <p>{artifact.creator}</p>
    <p>{artifact.year}</p>
    <p>{artifact.description}</p>
    </div>
  }
}

export default Exhibit;
