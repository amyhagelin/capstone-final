import auth from './auth'
import { login } from '../actions/auth'
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../constants/actionTypes'


describe('auth reducer', () => {
    it('should test login success', () => {
        const actual = auth({ 
            token: null,
            isLoggedIn: false
        }, {
            type: LOGIN_SUCCESS,
            token: 123
        })
        const expected = { 
            token: 123,
            isLoggedIn: true
        }

        expect(actual).toEqual(expected);
    })  
    it('should test logout', () => {
         const actual = auth({ 
            token: null,
            isLoggedIn: true
        }, {
            type: LOGOUT,
            token: 123
        })
        const expected = { 
            token: null,
            isLoggedIn: false
        }

        expect(actual).toEqual(expected);
    })
       it('should test login failure', () => {
         const actual = auth({ 
            token: null,
            isLoggedIn: true

        }, {
            type: LOGIN_FAILURE,
            error: 'test error'
        })
        const expected = { 
            token: null,
            isLoggedIn: true,
            theError: 'test error'
        }

        expect(actual).toEqual(expected);
    })
})