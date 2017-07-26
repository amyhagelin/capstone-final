import { LOGOUT } from '../constants/actionTypes';

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT })

    if (window.localStorage) {
        localStorage.removeItem('accessToken')
    }
}