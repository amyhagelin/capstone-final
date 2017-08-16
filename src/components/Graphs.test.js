import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Graphs } from './Graphs';

xdescribe ('<Graphs />', () => {

    // problems with invalid prop store

    it('Fires the correct dispatch', () => {
        const eventLog = [{
            date: new Date(123),
            time: '6:00 pm',
            type: 'aura',
            triggers: 'xyz',
            location: 'home',
            medication: 'abc',
            notes: 'def'
            }]
        const dispatch = jest.fn();
        const wrapper = mount(<Graphs dispatch={ dispatch } eventLog={ eventLog } />);
        expect(dispatch).toHaveBeenCalled();
    });

    it('renders correctly', () => {
        const eventLog = [{
                date: new Date(123),
                time: '6:00 pm',
                type: 'aura',
                triggers: 'xyz',
                location: 'home',
                medication: 'abc',
                notes: 'def'
            }];
            const dispatch = jest.fn();
        const tree = renderer.create(
            <Graphs eventLog={ eventLog } dispatch={ dispatch }/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // it('Renders without crashing', () => {
    //     shallow(<Graphs />);
    // });

    // it('Renders with proper data', () => {
    //     const wrapper = shallow(<Graphs 
    //         dispatch={ () => {} }  // how to do this?
    //         eventLog={ [] }
    //     />);

    //     expect(wrapper.find('h3').length).toEqual(2)
    // });


});