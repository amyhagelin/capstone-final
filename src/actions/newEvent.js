import { NEWEVENT, NEWEVENT_SUCCESS, NEWEVENT_FAILURE } from '../constants/actionTypes';
import { BACKEND_URL } from '../constants/config';
import { showAlert, clearAlert } from './ui';
import { getEvents } from './getEvents';


export const newEvent = (date, time, type, triggers, location, medication, notes) => (dispatch, getState) => {
    dispatch({ type: NEWEVENT })

    fetch(`${BACKEND_URL}/events`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Access-Token': getState().auth.token
        },
        body: JSON.stringify({
            date,
            time,
            type,
            triggers,
            location,
            medication,
            notes
        })
    }).then((response) => {
        dispatch({ type: NEWEVENT_SUCCESS })
        dispatch(showAlert('newEvent', 'A new event was added'))
        dispatch(getEvents())
        setTimeout(function(){dispatch(clearAlert())}, 3000)
    }).catch(() => {
        dispatch({ type: NEWEVENT_FAILURE })
    })
}