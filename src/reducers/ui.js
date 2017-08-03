import * as actions from '../constants/actionTypes'

const initialState = {
    alert: null
}

const ui = (state = initialState, action) => {
    switch (action.type) { 
        case actions.SHOW_ALERT:
            return {
                ...state,
                alert: action.payload
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