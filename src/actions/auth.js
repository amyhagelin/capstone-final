import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants/actionTypes';

export const login = (username, password) => dispatch => {
    dispatch({ type: LOGIN })

    // Content-Type header set to application/json
    // JSON.stringify as body 
    // data missing 

// For Thursday:
// send data from form to the backend
// try to connect mongoose so it can make a user, save user to database, use login to do that
// first test locally, then test on heroku

    fetch('http://localhost:8080/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    })
    .then((response) => response.json())
    .then((response) => {
        if (localStorage) {
            localStorage.setItem('accessToken', response.token)
        }
        dispatch({ type: LOGIN_SUCCESS, token: response.token })
    })
    .catch(() => {
        dispatch({ type: LOGIN_FAILURE })
    })
}