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
            (eachEvent, index) => {
              return <div key={index}>
              <Link to={{
                pathname: `/event/${eachEvent._id}`,
                state: {eachEvent}
              }}>
                <img src={eachEvent.image} alt={eachEvent.title}/>
                <h3>{eachEvent.title}</h3>
                <p>{eachEvent.date}</p>
              </Link>
              </div>
            }
          )
        }
      </div>
    )
  }
}

export default Events;
