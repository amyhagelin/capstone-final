import React from 'react';
import { shallow, mount } from 'enzyme';

import NewEvent from './NewEvent';

describe ('<NewEvent />', () => {
    it('Renders without crashing', () => {
        shallow(<NewEvent />);
    });

    it('Fires the correct handler', () => {
        const callback = jest.fn();
        const wrapper = mount(<NewEvent handleNewEvent={ callback }/>);
        wrapper.find('button').simulate('submit"');
        expect(callback).toHaveBeenCalled();
    });

});