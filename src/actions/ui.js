
import * as actions from '../constants/actionTypes';

export const showAlert = (location, title) => ({
    type: actions.SHOW_ALERT,
    payload: {
        location,
        title
    }
})