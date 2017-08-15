import { getEvents } from './getEvents'
import { GETEVENTS, GETEVENTS_SUCCESS, GETEVENTS_FAILURE } from '../constants/actionTypes';

// tried to get this to work but got error about getStore that I don't understand
// added return to fetch in action

describe('get events action', () => {
    it('Should dispatch getEvents', () => {
        const dispatch = jest.fn();
        const getState = () => ({
            auth: {
                token: 123
            }
        })
        const action = getEvents()(dispatch, getState)

        expect(dispatch).toHaveBeenCalledWith({
           type: GETEVENTS 
        })
    });

    it('should dispatch GETEVENTS_SUCCESS when successfully authenticated on server', () => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve(new Response(JSON.stringify({ token: 123 }), { 
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        ))

        const dispatch = jest.fn();
        const getState = () => ({
            auth: {
                token: 123
            }
        })
        return getEvents()(dispatch, getState).then(() => {    
            expect(dispatch.mock.calls[2][0]).toEqual({ type: GETEVENTS_SUCCESS, payload: { token: 123 } })
        });
    })
})