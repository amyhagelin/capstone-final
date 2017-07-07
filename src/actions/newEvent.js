import { NEWEVENT, NEWEVENT_SUCCESS, NEWEVENT_FAILURE } from '../constants/actionTypes';

export const newEvent = (date, time, type, triggers, location, medication, notes) => (dispatch, getState) => {
    dispatch({ type: NEWEVENT })

    fetch('http://localhost:8080/events', {
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
    }).catch(() => {
        dispatch({ type: NEWEVENT_FAILURE })
    })
}