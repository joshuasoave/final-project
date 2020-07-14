import React from 'react';
import { Link } from 'react-router-dom';

class Event extends React.Component {
  render() {
    // console.log(this.props);
      //save prop location state so we dont have to keep typing that out. This is the event that the user clicked on from previous page
      let currentEvent = this.props.location.state.eachEvent;
    return (
      <div>
        <p>This is the event description page</p>
        <Link to="/events"><button>Back</button></Link>
        <br/>
        <img src={currentEvent.image} alt={currentEvent.name}/>
        <h1>{currentEvent.title}</h1>
        <h4>Price:</h4>
        <p>{currentEvent.price}</p>
        <h4>Location:</h4>
        <p>{currentEvent.location}</p>
        <h4>Description:</h4>
        <p>{currentEvent.description}</p>
      </div>
    )
  }
}

export default Event;
