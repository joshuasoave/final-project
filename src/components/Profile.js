import React from 'react';

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
      <div>
      {
        loggedInUser ? "Logged in"
        :
        <>
        { this.state.createAccount ?
          <>
              <h2>Sign Up</h2>
              <form onSubmit={createUser}>
                Username: <input type="text" onKeyUp={changeNewUsername} placeholder="Username" /><br/>
                Password: <input type="password" onKeyUp={changeNewPassword} placeholder="Password" /><br/>
                <input type="submit" value="Sign Up" />
              </form>
              <h2>Already have an account?</h2>
                <a href="#" onClick={this.toggleCreateAccount}>Login</a>
          </>
          :
          <>
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
            <h2>Don't have an account?</h2>
            <a href="#" onClick={this.toggleCreateAccount}>Create an account</a>
          </>
          }
        </>
      }

      </div>
    )
  }
}

export default UserProfile;
