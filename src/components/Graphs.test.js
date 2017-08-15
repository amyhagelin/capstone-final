import React from 'react';
import { shallow, mount } from 'enzyme';

import { Graphs } from './Graphs';

xdescribe ('<Graphs />', () => {
    it('Renders without crashing', () => {
        shallow(<Graphs />);
    });

    it('Renders with proper data', () => {
        const wrapper = shallow(<Graphs 
            dispatch={ () => {} }  // how to do this?
            eventLog={ [] }
        />);

        expect(wrapper.find('h3').length).toEqual(2)
    });


});