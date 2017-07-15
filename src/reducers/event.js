import * as actions from '../constants/actionTypes'

const initialState = {
    log: [],
}

const event = (state = initialState, action) => {
    switch (action.type) { 
        case actions.GETEVENTS_SUCCESS:
            return {
                ...state,
                log: action.payload
            }   
        default: 
            return state
    }
}

export default event