import React from 'react';
import { shallow, mount } from 'enzyme';

import { Login } from './Login';

xdescribe ('<Login />', () => {
    it('Renders without crashing', () => {
        shallow(<Login />);
    });

    it('Renders with proper data', () => {
        const wrapper = shallow(<Login 
            dispatch={ () => {} }  // how do I do this?
            eventLog={ [] }
        />);

        expect(wrapper.find('h2').length).toEqual(1)
    });


});