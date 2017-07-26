import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants/actionTypes';

export const login = (username, password) => dispatch => {
    dispatch({ type: LOGIN })

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
    .then((response) => {
        if (response.status !== 200) {
            dispatch({ type: LOGIN_FAILURE, error: response })
        }

        return response.json()
    })
    .then((response) => {
        if (window.localStorage) {
            localStorage.setItem('accessToken', response.token)
        }
        // if (response.status === 200) {
            dispatch({ type: LOGIN_SUCCESS, token: response.token })
    
    })
    .catch((err) => {
        dispatch({ type: LOGIN_FAILURE, error: err })
    })
}