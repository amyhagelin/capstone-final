import event from './event'
import { getEvents } from '../actions/getEvents'
import { GETEVENTS_SUCCESS } from '../constants/actionTypes'


describe('event reducer', () => {
    it('should test getEvents success', () => {
        const initialState = {}
        const action = {
            type: GETEVENTS_SUCCESS,
            payload: ['log', 'of', 'events']
        }
         const actual = event(initialState, action)
        const expected = { 
            log: ['log', 'of', 'events']
        }

        expect(actual).toEqual(expected);
    })
})