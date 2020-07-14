import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


class Events extends React.Component {
  state = {
    events: []
  }
  //get all the events
  componentDidMount = () => {
    axios.get('/events').then(
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
        {
          this.state.events.map(
            (event, index) => {
              return <div key={index}>
                <img src={event.image} alt={event.title}/>
                <h3>{event.title}</h3>
                <p>{event.date}</p>
              </div>
            }
          )
        }
      </div>
    )
  }
}

export default Events;
