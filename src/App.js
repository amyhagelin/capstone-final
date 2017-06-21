import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import EmailList from './components/EmailList';
import Login from './components/Login'
import store from './store';


class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <Route exact path="/" component={ Login } />
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
