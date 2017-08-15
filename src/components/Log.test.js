import React from 'react';
import { shallow, mount } from 'enzyme';

import SingleEventComponent from './Event';

import { Log } from './Log';

describe ('<Log />', () => {
    it('Renders without crashing', () => {
        shallow(<Log />);
    });

    it('Renders with proper data', () => {
        const dispatch = jest.fn()
        const wrapper = mount(<Log 
            dispatch={ dispatch } 
            eventLog={ [{ _id: 1 }] }
        />);

        console.log(dispatch.mock.calls[0][0]);

        expect(wrapper.find(SingleEventComponent).length).toEqual(1)
    });


// I think this one is wrong - how to test compDidMount?
    it('Fires the correct dispatch', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<Log dispatch={ dispatch }/>);
        expect(dispatch).toHaveBeenCalled();
    });

    it('Renders the single events', () => {
        const eventLog = [{
            _id: 0
        }, {
            _id: 1
        }]
        const wrapper = shallow(<Log eventLog={eventLog} />);
        const eventComponents = wrapper.find(SingleEventComponent);
        expect(eventComponents.length).toEqual(eventLog.length);
    });

});