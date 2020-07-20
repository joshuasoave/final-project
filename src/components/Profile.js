import React from 'react';
import {Icon} from 'react-materialize';

class UserProfile extends React.Component {
  state = {
    createAccount: false
  }

  toggleCreateAccount = (event) => {
    // console.log('clicked');
    this.setState({
      createAccount: !this.state.createAccount
    })
  }


  render() {
    //save the functions from component props so we can reuse them
    const {login, getUsername, getPassword, loggedInUser, createUser, changeNewPassword, changeNewUsername, message} = this.props;

    return (
      <div className="profile">
      {
        loggedInUser ?
        <div className="loggedIn">
          <img src="https://i.imgur.com/mneILhp.jpg" alt="Image of a museum"/>
          <h3>Hello, {this.props.loggedInUser.username}</h3>
          <h4>Thanks for logging in</h4>
          <h5>Enjoy your visit at the Rufus Museum!</h5>
        </div>
        :
        <>
        { this.state.createAccount ?
          <div className="signup">
              <h2>Sign Up</h2>
              <form onSubmit={createUser}>
                Username: <input type="text" onKeyUp={changeNewUsername} placeholder="Username" /><br/>
                Password: <input type="password" onKeyUp={changeNewPassword} placeholder="Password" /><br/>
                <input type="submit" value="Sign Up" />
              </form>
              <h4>Already have an account?</h4>
                <a href="#" onClick={this.toggleCreateAccount}>Login</a>
          </div>
          :
          <div className="login">
            <h2>Login</h2>
            <form onSubmit={login}>
            Username: <input onKeyUp={getUsername} type="text" placeholder="Username" /><br/>
            Password: <input onKeyUp={getPassword} type="password" placeholder="Password"/><br/>
            <input type="submit" value="Login" />
            {
              message ?
              <p>Sorry, user not found</p> :
              " "
            }
            </form>
            <h4>Don't have an account?</h4>
            <a href="#" onClick={this.toggleCreateAccount}>Create an account</a>
          </div>
          }
        </>
      }

      </div>
    )
  }
}

export default UserProfile;
