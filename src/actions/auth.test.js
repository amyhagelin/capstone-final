import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, SHOW_LOADER } from '../constants/actionTypes';
import { login } from './auth'

xdescribe('login action', () => {
    it('Should dispatch login', () => {
        const dispatch = jest.fn();
        const action = login('username', 'password')(dispatch)

        expect(dispatch).toHaveBeenCalledWith({
           type: LOGIN 
        })
    });

    it('should dispatch LOGIN_SUCCESS when successfully authenticated on server', () => {
        window.fetch = jest.fn().mockImplementation(() => new Promise((resolve, reject) => {
            resolve(new Response({ token: 123 }, { 
                status: 200 ,
                headers: {
                    'Content-Type': 'application/json'
                }
            }))
        }))

        const dispatch = jest.fn();
        const action = login('username', 'password')(dispatch)

        expect(dispatch).toHaveBeenCalledWith({ type: LOGIN_SUCCESS, token: 123 })
    })
})