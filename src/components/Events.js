import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


class Events extends React.Component {
  state = {
    events: []
  }

  /////////
  //call database
  ////////
  callDatabase = () => {
    return "https://floating-bayou-96095.herokuapp.com"
  }

  //get all the events
  componentDidMount = () => {
    axios.get(`${this.callDatabase()}/events`).then(
      (response) => {
        this.setState({
          events:response.data
        })
      }
    )
  }

  render() {
    return (
      <div>
        <h3>Events</h3>
          <ul className="eventsNavPage">
        {
          this.state.events.map(
            (eachEvent, index) => {
              return (
              <Link to={{
                    pathname: `/event/${eachEvent._id}`,
                    state: {eachEvent}
                  }}>
                  <div key={index} className="eventsNavContainer">
                    <div className="eventImgContainer">
                      <img src={eachEvent.image} alt={eachEvent.title}/>
                    </div>
                    <div className="eventInfo">
                      <h3>{eachEvent.title}</h3>
                      <p>{eachEvent.date}</p>
                      <p>{eachEvent.description}</p>
                    </div>
                  </div>
              </Link>
          )
        }
    )
  }
          </ul>
    </div>
    )
  }
}

export default Events;
