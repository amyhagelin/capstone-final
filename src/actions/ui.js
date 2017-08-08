
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

export const showLoader = () => ({
    type: actions.SHOW_LOADER,
})

export const hideLoader = () => ({
    type: actions.HIDE_LOADER,
})