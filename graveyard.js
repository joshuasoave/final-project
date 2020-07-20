<nav>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/events">Events</Link></li>
    <li><Link to="/exhibits">Exhibits</Link></li>
    <li><Link to="/about">About</Link></li>
  </ul>
  {
    this.state.loggedInUser ?
    <li id="logout" onClick={this.logout}>Logout</li> :

    <Link id="login" to="/profile">Login</Link>
  }
</nav>

<Icon>menu</Icon>

/*//////*/
/* NAV */
/*//////*/
nav {
  background: black;
  justify-content: center;
  display: flex;
  list-style: none;
}

#logout, #login {
  background: black;
  position: absolute;
  right: 3%;
}
