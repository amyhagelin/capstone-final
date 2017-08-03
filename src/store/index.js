// make a component and connect to store
// component can be a button w/ a click listener, dispatch the login action


import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';

// import auth from '../reducers/auth'
import combinedReducers from '../reducers/index';

export const history = createHistory();

export default createStore(
    combinedReducers, 
    composeWithDevTools(), 
    applyMiddleware(thunk, routerMiddleware(history))
);