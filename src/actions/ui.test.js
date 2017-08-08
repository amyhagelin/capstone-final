import { clearAlert } from './ui.js'
import { CLEAR_ALERT } from '../constants/actionTypes'

describe('clearAlert action', () => {
    it('Should return the action', () => {
        expect(clearAlert()).toEqual({
            type: CLEAR_ALERT
        })
    });
})