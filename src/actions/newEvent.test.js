import { NEWEVENT, NEWEVENT_SUCCESS, NEWEVENT_FAILURE } from '../constants/actionTypes';
import { newEvent } from './newEvent'

describe('newEvent action', () => {
    it('Should dispatch newEvent', () => {
        const dispatch = jest.fn();
        const mockData = {
            date: 'June 25, 2017',
            time: '5:00 pm',
            type: 'aura',
            triggers: 'xyz',
            location: 'home',
            medication: 'abc',
            notes: 'def'
        };
        const getState = () => ({
            auth: {
                token: 123
            }
        })

        const action = newEvent(mockData)(dispatch, getState);
        
        expect(dispatch).toHaveBeenCalledWith({
           type: NEWEVENT 
        })
    });

    it('should dispatch NEWEVENT_SUCCESS when successfully authenticated on server', () => {
        const mockData = {
            date: 'June 25, 2017',
            time: '5:00 pm',
            type: 'aura',
            triggers: 'xyz',
            location: 'home',
            medication: 'abc',
            notes: 'def'
        };
        
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
        return newEvent(mockData)(dispatch, getState).then(() => {
            expect(dispatch.mock.calls[2][0]).toEqual({ type: NEWEVENT_SUCCESS })
        });
    })

});
