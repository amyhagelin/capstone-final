import React from 'react';
import { shallow, mount } from 'enzyme';

import { Logout } from './Logout';

xdescribe ('<Logout />', () => {
    it('Renders without crashing', () => {
        shallow(<Logout />);
    });

    it('Renders with proper data', () => {
        const wrapper = shallow(<Logout 
            dispatch={ () => {} } 
            logout={ [] }
        />);

        expect(wrapper.find('Link').length).toEqual(1)
    });


});