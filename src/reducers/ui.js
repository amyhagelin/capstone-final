import * as actions from '../constants/actionTypes'

const initialState = {
    alert: null,
    isLoading: false
}

const ui = (state = initialState, action) => {
    switch (action.type) { 
        case actions.SHOW_LOADER: 
            return {
                ...state,
                isLoading: true
            }
        case actions.HIDE_LOADER: 
            return {
                ...state,
                isLoading: false
            }
        case actions.SHOW_ALERT:
            return {
                ...state,
                alert: action.payload
            }   
        case actions.CLEAR_ALERT: 
            return {
                ...state,
                alert: null
            }
        default: 
            return state
    }
}

export default ui

/**
 * initial state - goes to the reducer
 * ui: { alert: { location: 'login', title: 'wrong credentials' }  }
 */