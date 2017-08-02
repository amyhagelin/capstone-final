import { GETEVENTS, GETEVENTS_SUCCESS, GETEVENTS_FAILURE } from '../constants/actionTypes';
import { BACKEND_URL } from '../constants/config';


export const getEvents = () => (dispatch, getState) => {
    dispatch({ type: GETEVENTS })

    fetch(`${BACKEND_URL}/events`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Access-Token': getState().auth.token
        }
    }).then((response) => 
        response.json()
    ).then((jsonResponse) => {
        dispatch({ type: GETEVENTS_SUCCESS, payload: jsonResponse })
    }).catch(() => {
        dispatch({ type: GETEVENTS_FAILURE })
    })
}