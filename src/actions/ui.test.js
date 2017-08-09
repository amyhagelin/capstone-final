import { showAlert, clearAlert, showLoader, hideLoader } from './ui.js'
import { SHOW_ALERT, CLEAR_ALERT, SHOW_LOADER, HIDE_LOADER } from '../constants/actionTypes'

describe('showAlert action', () => {
    it('Should return the action', () => {
        expect(showAlert('loginScreen', 'error')).toEqual({
            type: SHOW_ALERT,
            payload: {
                location: 'loginScreen',
                title: 'error'
            }
        })
    });
})

describe('clearAlert action', () => {
    it('Should return the action', () => {
        expect(clearAlert()).toEqual({
            type: CLEAR_ALERT
        })
    });
})

describe('showLoader action', () => {
    it('Should return the action', () => {
        expect(showLoader()).toEqual({
            type: SHOW_LOADER
        })
    });
})

describe('hideLoader action', () => {
    it('Should return the action', () => {
        expect(hideLoader()).toEqual({
            type: HIDE_LOADER
        })
    });
})