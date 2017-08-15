import { signup } from './signup'
import { login } from './auth'
import { SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE, LOGIN } from '../constants/actionTypes';
import { showAlert, clearAlert, showLoader, hideLoader } from './ui'


// running into trouble with hideloader
window.fetch = jest.fn().mockImplementation(() => Promise.resolve(new Response(JSON.stringify({ token: 123 }), { 
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
))

describe('login action', () => {
    it('Should dispatch signup', () => {
        const dispatch = jest.fn();
        const action = signup('username', 'password')(dispatch)

        expect(dispatch).toHaveBeenCalledWith({
           type: SIGNUP 
        })
    });

    it('Should dispatch showLoader', () => {
        const dispatch = jest.fn();
        const action = signup('username', 'password')(dispatch)

        expect(dispatch).toHaveBeenCalledWith(showLoader())
    });

    xit('Should dispatch login', () => {
        // const dispatch = jest.fn();
        // const action = signup('username', 'password')(dispatch)

        // return action.then(() => {
        //     expect(dispatch.mock.calls[4][0]).toEqual(login('username', 'password'))
        // });
        
    });

    it('should dispatch SIGNUP_SUCCESS when successfully authenticated on server', () => {
        

        const dispatch = jest.fn();
        return signup('username', 'password')(dispatch).then(() => {
            expect(dispatch.mock.calls[2][0]).toEqual({ type: SIGNUP_SUCCESS })
        });
    })
});