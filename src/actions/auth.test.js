import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants/actionTypes';
import { login } from './auth'
import { showLoader } from './ui'


describe('login action', () => {
    it('Should dispatch login', () => {
        const dispatch = jest.fn();
        const action = login('username', 'password')(dispatch)

        expect(dispatch).toHaveBeenCalledWith({
           type: LOGIN 
        })
    });

    it('Should dispatch showLoader', () => {
        const dispatch = jest.fn();
        const action = login('username', 'password')(dispatch)

        expect(dispatch).toHaveBeenCalledWith(showLoader())
    });

    it('should dispatch LOGIN_SUCCESS when successfully authenticated on server', () => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve(new Response(JSON.stringify({ token: 123 }), { 
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        ))

        const dispatch = jest.fn();
        return login('username', 'password')(dispatch).then(() => {
            expect(dispatch).toHaveBeenCalledWith({ type: LOGIN_SUCCESS, token: 123 })
        });
    })
})