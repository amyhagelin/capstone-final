import { SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../constants/actionTypes';
import { BACKEND_URL } from '../constants/config';

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
    }).catch(() => {
        dispatch({ type: SIGNUP_FAILURE })
    })
}