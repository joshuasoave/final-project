import React from 'react';
import { Link } from 'react-router-dom';
import {Icon} from 'react-materialize';

class Event extends React.Component {
  render() {
    // console.log(this.props);
      //save prop location state so we dont have to keep typing that out. This is the event that the user clicked on from previous page
      let currentEvent = this.props.location.state.eachEvent;
    return (
      <div className="eventShow">
        <Link to="/events" className="eventBack">
          <Icon small>arrow_back</Icon>
        </Link>
        <div className="eventShowImg">
          <img src={currentEvent.image} alt={currentEvent.name}/>
        </div>
        <div className="eventShowInfo">
          <h1>{currentEvent.title}</h1>
          <p>{currentEvent.date} - {currentEvent.time}</p>
          <h4>Price:</h4>
          <p>{currentEvent.price}</p>
          <h4>Location:</h4>
          <p>{currentEvent.location}</p>
          <p id="eventDescription">{currentEvent.description}</p>
        </div>
      </div>
    )
  }
}

export default Event;
