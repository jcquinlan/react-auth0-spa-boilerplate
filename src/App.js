import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Auth from './auth';
import { makeRoutes } from './routes';

class App extends Component {
  componentWillMount() {
    // When entering the application, check
    // to see if the user already has their information
    // in localStorage
    Auth.searchForLogin();
  }

  render() {
    return (
      <div>
          <ul>
            <li><Link to="/home">Home</Link></li>
          </ul>

          { makeRoutes() }
      </div>
    );
  }
}

export default App;
