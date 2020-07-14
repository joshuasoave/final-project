import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class UserProfile extends React.Component {

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form>
          Username: <input type="text" /><br/>
          Password: <input type="password" /><br/>
          <input type="submit" value="Sign Up" />
        </form>
        <h2>Don't have an account?</h2>
        <Link to="/createAccount">Create an account</Link>
      </div>
    )
  }
}

export default UserProfile;
