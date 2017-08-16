import React from 'react';
import { shallow, mount } from 'enzyme';

import { Signup } from './Signup';

describe ('<Signup />', () => {
    it('Renders without crashing', () => {
        shallow(<Signup />);
    });

    it('Renders with proper data', () => {
        const wrapper = shallow(<Signup 
            dispatch={ () => {} }
            signup={ [] }
        />);

        expect(wrapper.find('input').length).toEqual(2)
    });


});