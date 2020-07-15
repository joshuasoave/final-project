import React from 'react';
import { Link } from 'react-router-dom';

class UserProfile extends React.Component {
  state = {
  }


  render() {
    console.log(this.props);
    return (
      <div>
      {
        this.state.loggedInUser ? "You are logged in" :
      <div>
        <h2>Login</h2>
        <form onSubmit={this.props.login}>
          Username: <input onKeyUp={this.props.getUsername} type="text" /><br/>
          Password: <input onKeyUp={this.props.getPassword} type="password" /><br/>
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
