import { logout } from './logout'
import { LOGOUT } from '../constants/actionTypes';


describe('logout action', () => {
      it('Should dispatch logout', () => {
        const dispatch = jest.fn();
    
        const action = logout()(dispatch)

        expect(dispatch).toHaveBeenCalledWith({
           type: LOGOUT 
        })
    });
})