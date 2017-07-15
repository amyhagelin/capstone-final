import { LOGOUT } from '../constants/actionTypes';

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT })

    if (localStorage) {
        localStorage.removeItem('accessToken')
    }
}