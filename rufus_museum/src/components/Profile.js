import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class UserProfile extends React.Component {
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
      <div>
      {
        this.state.loggedInUser ? "You are logged in" :
      <div>
        <h2>Login</h2>
        <form onSubmit={this.login}>
          Username: <input onKeyUp={this.getUsername} type="text" /><br/>
          Password: <input onKeyUp={this.getPassword} type="password" /><br/>
          <input type="submit" value="Sign Up" />
        </form>
        <h2>Don't have an account?</h2>
        <Link to="/createAccount">Create an account</Link>
      </div>
      }
      </div>
    )
  }
}

export default UserProfile;
