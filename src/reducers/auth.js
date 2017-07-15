import * as authActions from '../constants/actionTypes'

console.log(authActions.LOGIN)

const initialState = {
    token: null,
    isLoggedIn: false
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
        default: 
            return state
    }
}

export default auth