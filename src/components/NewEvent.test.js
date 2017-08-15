import React from 'react';
import { shallow, mount } from 'enzyme';

import { NewEvent } from './NewEvent';

describe ('<NewEvent />', () => {
    it('Renders without crashing', () => {
        shallow(<NewEvent />);
    });

    it('Should dispatch action when clicking submit', () => {
        const dispatch = jest.fn()
        const wrapper = mount(<NewEvent dispatch={ dispatch }/>);
        wrapper.find('form').simulate('submit');
        expect(dispatch).toHaveBeenCalled();
    });

});