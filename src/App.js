import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import EmailList from './components/EmailList';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './containers/Dashboard';
import Print from './containers/Print';
import LandingPage from './containers/LandingPage';
import store from './store';
import { LOGIN_SUCCESS } from './constants/actionTypes';

if (localStorage && localStorage.getItem('accessToken')) {
  store.dispatch({ type: LOGIN_SUCCESS, token: localStorage.getItem('accessToken') })
}

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
              <Route exact path="/print" component={ Print } />
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
