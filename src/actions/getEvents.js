import { GETEVENTS, GETEVENTS_SUCCESS, GETEVENTS_FAILURE } from '../constants/actionTypes';
import { BACKEND_URL } from '../constants/config';
import { showLoader, hideLoader } from './ui'


export const getEvents = () => (dispatch, getState) => {
    dispatch({ type: GETEVENTS })
    dispatch(showLoader())

    return fetch(`${BACKEND_URL}/events`, { // added return here
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Access-Token': getState().auth.token
        }
    }).then((response) => 
        response.json() // do I need to add return here too?
    ).then((jsonResponse) => {
        dispatch({ type: GETEVENTS_SUCCESS, payload: jsonResponse })
        dispatch(hideLoader())
    }).catch(() => {
        dispatch({ type: GETEVENTS_FAILURE })
        dispatch(hideLoader())
    })
}