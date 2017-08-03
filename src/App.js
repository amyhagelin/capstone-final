import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {
  // BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux';

import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './containers/Dashboard';
import Print from './containers/Print';
import LandingPage from './containers/LandingPage';
import store, { history } from './store';
import { LOGIN_SUCCESS } from './constants/actionTypes';

if (window.localStorage && localStorage.getItem('accessToken')) {
  store.dispatch({ type: LOGIN_SUCCESS, token: localStorage.getItem('accessToken') })
}

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <div>
              <Route exact path="/" component={ LandingPage } />
              <Route exact path="/login" component={ Login } />
              <Route exact path="/signup" component={ Signup } />
              <Route exact path="/dashboard" component={ Dashboard } />
              <Route exact path="/print" component={ Print } />
            </div>
          </ConnectedRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
