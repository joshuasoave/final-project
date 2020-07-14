import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class CreateAccount extends React.Component {
  state = {
    currentUser: {
      username: "",
      password: "",
      favorites: []
    }
  }

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
        this.setState({
          currentUser: response.data
        })
    })
  }

  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={this.createUser}>
          Username: <input type="text" onKeyUp={this.changeNewUsername} placeholder="Username" /><br/>
          Password: <input type="password" onKeyUp={this.changeNewPassword} placeholder="Password" /><br/>
          <input type="submit" value="Sign Up" />
        </form>
        <h2>Already have an account?</h2>
        <Link to="/profile">Login</Link>
      </div>
    )
  }
}

export default CreateAccount;
