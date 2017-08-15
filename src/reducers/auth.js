import * as authActions from '../constants/actionTypes'

const initialState = {
    token: null,
    isLoggedIn: false,
    theError: null
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case authActions.LOGIN_SUCCESS: 
            return {
                ...state,
                isLoggedIn: true,
                token: action.token
            }
        case authActions.LOGOUT: 
            return {
                ...state,
                isLoggedIn: false,
                token: null
            }
        case authActions.LOGIN_FAILURE:
            return {
                ...state,
                theError: action.error
            }
        default: 
            return state
    }
}

export default auth