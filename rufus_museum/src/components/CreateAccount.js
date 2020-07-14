import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class CreateAccount extends React.Component {

  createUser = {}

  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={this.createUser}>
          Username: <input type="text" /><br/>
          Password: <input type="password" /><br/>
          <input type="submit" value="Sign Up" />
        </form>
        <h2>Already have an account?</h2>
        <Link to="/profile">Login</Link>
      </div>
    )
  }
}

export default CreateAccount;
