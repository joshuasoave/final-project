import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Exhibits from './Exhibits.js';
import Featured from './Featured.js';
import Egypt from './Egypt.js';
import Surrealism from './Surrealism.js';
import Space from './Space.js';

class Home extends React.Component {
  render() {
    return (
      <div>
        <p>This is the home page</p>
        <Exhibits></Exhibits>
      </div>
    )
  }
}

export default Home;
