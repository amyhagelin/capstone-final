
import * as actions from '../constants/actionTypes';

export const showAlert = (location, title) => ({
    type: actions.SHOW_ALERT,
    payload: {
        location,
        title
    }
})

export const clearAlert = () => ({
    type: actions.CLEAR_ALERT,
})