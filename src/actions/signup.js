import { SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../constants/actionTypes';
import { BACKEND_URL } from '../constants/config';
import { push } from 'react-router-redux';
import { showAlert } from './ui'


export const signup = (username, password) => dispatch => {
    dispatch({ type: SIGNUP })

    fetch(`${BACKEND_URL}/users/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    }).then((response) => {
        dispatch({ type: SIGNUP_SUCCESS })
        dispatch(push('/login'))
    }).catch(() => {
        dispatch({ type: SIGNUP_FAILURE })
        dispatch(showAlert('signup', 'New user was not created successfully. Please try again.'))
    })
}