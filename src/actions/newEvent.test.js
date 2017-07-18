import { NEWEVENT, NEWEVENT_SUCCESS, NEWEVENT_FAILURE } from '../constants/actionTypes';
import newEvent from './newEvent'

describe('newEvent', () => {
    it('Should return the action', () => {
        const mockData = {
            date: 'June 25, 2017',
            time: '5:00 pm',
            type: 'aura',
            triggers: 'xyz',
            location: 'home',
            medication: 'abc',
            notes: 'def'
        };
        const action = newEvent(mockData);
        expect(action.type).toEqual(NEWEVENT);
        expect(action.type).toEqual(mockData.type);
    });

    // not sure how to test the success and failure
});
