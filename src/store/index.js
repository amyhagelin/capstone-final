// make a component and connect to store
// component can be a button w/ a click listener, dispatch the login action


import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// import thunk from 'redux-thunk';

import auth from '../reducers/auth'
import combinedReducers from '../reducers/index';

export default createStore(auth, composeWithDevTools());