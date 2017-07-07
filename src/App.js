import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import EmailList from './components/EmailList';
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './containers/Dashboard'
import LandingPage from './containers/LandingPage'
import store from './store';


class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <div>
              <Route exact path="/" component={ LandingPage } />
              <Route exact path="/login" component={ Login } />
              <Route exact path="/signup" component={ Signup } />
              <Route exact path="/dashboard" component={ Dashboard } />
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
