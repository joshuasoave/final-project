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
import Profile from './components/Profile.js';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//https://reactrouter.com/web/api/Route/render-func

class App extends React.Component {
  state = {
    isLoggedIn: false,
    createAccount: false
  }


  ////////
  //Check session on pg load
  ////////
  componentDidMount = () => {
    //get the session data and set the user to that state
    axios.get('/session').then((response) => {
      this.setState({
        loggedInUser: response.data
      })
    })
  }

  ///////////
  //Create user
  //////////

  changeNewPassword = (event) => {
    this.setState({
      newPassword: event.target.value
    })
  }

  changeNewUsername = (event) => {
    this.setState({
      newUsername: event.target.value
    })
  }

  createUser = (event) => {
    event.preventDefault();
    axios.post(
      '/users',
      {
        username: this.state.newUsername,
        password: this.state.newPassword
      }
    ).then((response) => {
      // console.log(response.data);
        this.setState({
          loggedInUser: response.data,
        })
    })
  }

  ////////////
  //Login
  ///////////

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
      // console.log(response.data);
      if(response.data.username) {
        this.setState({
          loggedInUser: response.data
        })
      } else {
        this.setState({
          message: response.data
        })
      }
      // console.log(this.state.loggedInUser);
    })
  }

  //////////////
  //Logout
  /////////////
  logout = (event) => {
    axios.delete('/session').then((response) => {
      this.setState({
        //set the logged in user to null so all of the ternary operators come back false
        loggedInUser: null
      })
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
            {
            this.state.loggedInUser ?
              <button onClick={this.logout}>Logout</button> : " "
            }
          </nav>

          <main>
              <div>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/events" component={Events} />
                <Route path="/featured" component={Featured}/>
                <Route path="/egypt"
                render={
                  props => <Egypt artifacts={this.state.artifacts}/>
                } />
                <Route path="/surrealism" component={Surrealism} />
                <Route path="/space" component={Space} />
                <Route path="/exhibits" component={Exhibits}/>
                <Route path="/artifacts/exhibit/:id" component={Exhibit}/>
                <Route path="/event/:id"
                component={Event}/>
                <Route path="/profile"
                render={
                  props => <Profile {...props}
                  login={this.login}
                  getUsername={this.getUsername} getPassword={this.getPassword} loggedInUser={this.state.loggedInUser}
                  createUser={this.createUser}
                  changeNewPassword={this.changeNewPassword}
                  changeNewUsername={this.changeNewUsername}
                  message={this.state.message}
                  />  }/>
              </div>
          </main>

          <footer>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/exhibits">Exhibits</Link></li>
              <li>Favorites</li>
              <li><Link to={{
                pathname: "profile"
              }}>Profile</Link></li>
            </ul>
          </footer>

        </div>
      </Router>
    )
  }
}

export default App;
