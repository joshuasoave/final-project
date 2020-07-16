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

class App extends React.Component {
  state = {
    isLoggedIn: false,
    createAccount: false
  }

  ////////
  //Check session on pg load
  ////////
  componentDidMount = () => {
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

  toggleCreateAccount = (event) => {
    console.log('clicked');
    this.setState({
      createAccount: !this.state.createAccount
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

            {
              this.state.loggedInUser ?
              <div>
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
                <Route path="/profile"
                component={Profile}/>
              </div>
              :
              <div>
              {
                  this.state.createAccount ?
                  <div>
                    <h2>Sign Up</h2>
                    <form onSubmit={this.createUser}>
                      Username: <input type="text" onKeyUp={this.changeNewUsername} placeholder="Username" /><br/>
                      Password: <input type="password" onKeyUp={this.changeNewPassword} placeholder="Password" /><br/>
                      <input type="submit" value="Sign Up" />
                    </form>
                    <h2>Already have an account?</h2>
                      <a href="#" onClick={this.toggleCreateAccount}>Login</a>
                  </div> :
                  <div>
                    <h2>Login</h2>
                    <form onSubmit={this.login}>
                    Username: <input onKeyUp={this.getUsername} type="text" placeholder="Username" /><br/>
                    Password: <input onKeyUp={this.getPassword} type="password" placeholder="Password"/><br/>
                    <input type="submit" value="Login" />
                    {
                      this.state.message ?
                      <p>Sorry, user not found</p> :
                      " "
                    }
                    </form>
                    <h2>Don't have an account?</h2>
                    <a href="#" onClick={this.toggleCreateAccount}>Create an account</a>
                  </div>
                }
              </div>
            }

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
