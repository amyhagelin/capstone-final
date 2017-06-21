import * as authActions from '../constants/authActionTypes'

console.log(authActions.LOGIN)

const initialState = {
    token: null,
    isLoggedIn: false
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case authActions.LOGIN: 
            return {
                ...state,
                isLoggedIn: true
            }
        default: 
            return state
    }
}

export default auth