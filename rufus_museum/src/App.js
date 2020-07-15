import React from 'react';
import axios from 'axios';
import Header from './components/Header.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Featured from './components/Featured.js';
import Egypt from './components/Egypt.js';
import Surrealism from './components/Surrealism.js';
import Space from './components/Space.js';
import Exhibits from './components/Exhibits.js';
import Exhibit from './components/Exhibit.js';
import Events from './components/Events.js';
import Event from './components/Event.js';
import CreateAccount from './components/CreateAccount.js';
import UserProfile from './components/Profile.js';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  state = {
    isLoggedIn: false
  }

  getUsername = (event) => {
    this.setState({
      loginUsername: event.target.value
    })
  }

  getPassword = (event) => {
    this.setState({
      loginPassword: event.target.value
    })
  }

  login = (event) => {
    event.preventDefault();
    axios.post(
      '/session',
      {
        username: this.state.loginUsername,
        password: this.state.loginPassword
      }
    ).then((response) => {
      console.log(response.data);
      this.setState({
        loggedInUser: response.data,
        isLoggedIn: true
      })
      // console.log(this.state.loggedInUser);
    })
  }


  render() {
    return (
      <Router>
        <div className="container">
          <nav>
            <Header />
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/exhibits">Exhibits</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
          <main>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/events" component={Events} />
            <Route path="/featured" component={Featured}/>
            <Route path="/egypt" component={Egypt} />
            <Route path="/surrealism" component={Surrealism} />
            <Route path="/space" component={Space} />
            <Route path="/exhibits" component={Exhibits}/>
            <Route path="/exhibit/:id" component={Exhibit}/>
            <Route path="/event/:id"
            component={Event}/>
            <Route path="/createAccount" component={CreateAccount}/>
            <Route path="/profile"
            component={UserProfile} render={props => <UserProfile login = {this.login} />} />
          </main>
          <footer>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/exhibits">Exhibits</Link></li>
              <li>Favorites</li>
              <li><Link to={{
                pathname: "/profile"
              }}>Profile</Link></li>
            </ul>
          </footer>
        </div>
      </Router>
    )
  }
}

export default App;
