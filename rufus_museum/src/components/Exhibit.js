import React from 'react';
import {Link} from 'react-router-dom';
class Exhibit extends React.Component{

  render() {
    // console.log(this.props);
    return <div>
    Exhibit page
    <Link to={{
      pathname:`/${this.props.location.state.artifact.theme}`
    }}>
    <button>Back</button>
    </Link>
    <h1>{this.props.location.state.artifact.name}</h1>
    <p>{this.props.location.state.artifact.description}</p>
    </div>
  }
}

export default Exhibit;