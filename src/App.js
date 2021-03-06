import React from 'react';
import axios from 'axios';
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
import Favorites from './components/Favorites.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Icon} from 'react-materialize';


//https://reactrouter.com/web/api/Route/render-func

class App extends React.Component {
  state = {
    isLoggedIn: false,
    createAccount: false
  }

  /////////
  //call database
  ////////
  callDatabase = () => {
    return `http://localhost:5000`
  }

  ///////////
  //Set session data
  //////////
  //get the session data and set the user to that state
  getSession = () => {
    axios.get(`${this.callDatabase()}/session`).then((response) => {
      this.setState({
        loggedInUser: response.data
      })
    })
  }

  ////////////
  //Get user data
  ///////////
  //get the most up to date data on user from db
  getUser = () => {
    //if logged in get data
    if(this.state.loggedInUser) {
      axios.get(`${this.callDatabase()}/users/${this.state.loggedInUser._id}`).then((response) => {
        this.setState({
          loggedInUser: response.data
        })
      })
    }
  }

  ////////
  //Check session on pg load
  ////////
  componentDidMount = () => {
    //get the session data and set the user to that state
    this.getSession();
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
      `${this.callDatabase()}/users`,
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
      `${this.callDatabase()}/session`,
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
    axios.delete(`${this.callDatabase()}/session`).then((response) => {
      this.setState({
        //set the logged in user to null so all of the ternary operators come back false
        loggedInUser: null
      })
    })
  }


  render() {
    return (
      <Router>
        <div className="myContainer">
          <main className="main">
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
                <Route path="/artifacts/exhibit/:id" render={
                  props => <Exhibit {...props}
                    getUser={this.getUser}
                    loggedInUser={this.state.loggedInUser}
                  />
                }/>
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
                  <Route path="/users/favorites/:id"
                  render={
                    props => <Favorites {...props}
                    loggedInUser={this.state.loggedInUser} getSession={this.getSession}
                   /> } />
              </div>
          </main>

          <footer className="pageFooter">
            <ul>
              <li>
                <Link to="/">
                  <div>
                    <Icon>home</Icon>
                    <p>Home</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/events">
                  <div>
                    <Icon>event</Icon>
                    <p>Events</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/exhibits">
                  <div>
                    <Icon>map</Icon>
                    <p>Exhibits</p>
                  </div>
                </Link>
              </li>
              {
                this.state.loggedInUser ?
                <li>
                  <Link to={{
                    pathname: `/users/favorites/${this.state.loggedInUser._id}`}}
                  >
                    <div>
                      <Icon>favorite</Icon>
                      <p>Favorites</p>
                    </div>
                  </Link></li> :
                " "
              }
              {
                this.state.loggedInUser ?
              <li>
                <div onClick={this.logout} id="logout">
                  <Icon>power_settings_new</Icon>
                  <p>Logout</p>
                </div>
              </li>

              :

              <li>
                <Link to={{
                pathname: "/profile"
                }}>
                  <div>
                    <Icon>account_box</Icon>
                    <p>Profile</p>
                  </div>
                </Link>
            </li>
            }
            </ul>
          </footer>

        </div>
      </Router>
    )
  }
}

export default App;
