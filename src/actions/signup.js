import { SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../constants/actionTypes';
import { BACKEND_URL } from '../constants/config';
import { showAlert, clearAlert, showLoader, hideLoader } from './ui'
import { login } from './auth';

export const signup = (username, password) => dispatch => {
    dispatch({ type: SIGNUP })
    dispatch(showLoader())

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
        dispatch({ type: SIGNUP_SUCCESS });
        dispatch(hideLoader())
        dispatch(login(username, password));
    }).catch(() => {
        dispatch({ type: SIGNUP_FAILURE });
        dispatch(hideLoader())
        dispatch(showAlert('signup', 'New user was not created successfully. Please try again.'))
        setTimeout(function(){dispatch(clearAlert())}, 3000)
    })
}