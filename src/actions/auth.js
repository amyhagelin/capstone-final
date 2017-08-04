import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants/actionTypes';
import { BACKEND_URL } from '../constants/config';
import { push } from 'react-router-redux';
import { showAlert, clearAlert } from './ui'

export const login = (username, password) => dispatch => {
    dispatch({ type: LOGIN })

    fetch(`${BACKEND_URL}/users/login`, {
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
            dispatch(showAlert('login', 'Incorrect username or password'))
            throw new Error('Incorrect username or password')
            setTimeout(function(){dispatch(clearAlert())}, 3000)
        }

        return response.json()
    })
    .then((response) => {
        if (window.localStorage) {
            localStorage.setItem('accessToken', response.token)
        }
        dispatch({ type: LOGIN_SUCCESS, token: response.token })
        dispatch(push('/dashboard'))        
    })
    .catch((err) => {
        dispatch({ type: LOGIN_FAILURE, error: err })
    })
}
