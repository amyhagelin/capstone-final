import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import { NewEvent } from './NewEvent';

describe ('<NewEvent />', () => {

    it('renders correctly', () => {
         const event = {
            date: new Date(123),
            time: '6:00 pm',
            type: 'aura',
            triggers: 'xyz',
            location: 'home',
            medication: 'abc',
            notes: 'def'
        };
        const tree = renderer.create(
            <NewEvent event={ event } />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Should dispatch action when clicking submit', () => {
        const dispatch = jest.fn()
        const wrapper = mount(<NewEvent dispatch={ dispatch }/>);
        wrapper.find('form').simulate('submit');
        expect(dispatch).toHaveBeenCalled();
    });

});