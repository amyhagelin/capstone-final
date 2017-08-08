import ui from './ui'
import { showLoader } from '../actions/ui'

describe('ui reducer', () => {
    it('should test loader', () => {
        const reducer = ui({ isLoading: false }, showLoader())
        const expectedState = { isLoading: true }

        expect(reducer).toEqual(expectedState);
    })  
})