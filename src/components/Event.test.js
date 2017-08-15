import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Event from './Event';

describe ('<Event />', () => {
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
            <Event event={ event } />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // it('Renders without crashing', () => {
    //     shallow(<Event />);
    // });

    // it('Renders with proper data', () => {
    //     const event = {
    //         date: new Date(123),
    //         time: '5:00 pm',
    //         type: 'aura',
    //         triggers: 'xyz',
    //         location: 'home',
    //         medication: 'abc',
    //         notes: 'def'
    //     };

    //     const wrapper = shallow(<Event event={ event } />);

    //     expect(wrapper.find('h2').length).toEqual(1)
    // });


});