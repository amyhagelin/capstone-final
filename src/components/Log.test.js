import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import SingleEventComponent from './Event';
import { MemoryRouter } from 'react-router'
import {history } from '../store'
import { Log } from './Log';
import { ConnectedRouter } from 'react-router-redux';

xdescribe ('<Log />', () => {

    it('renders correctly', () => {
        const eventLog = [{
                _id: 0,
            date: new Date(123)
            }, {
                _id: 1,
            date: new Date(123)
            }]
        const tree = renderer.create(
            <ConnectedRouter history={history}>
                <Log eventLog={ eventLog } dispatch={ () => {} } />
            </ConnectedRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
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

    it('Fires the correct dispatch', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<Log dispatch={ dispatch }/>);
        expect(dispatch).toHaveBeenCalled();
    });

    it('Renders the single events', () => {
        const eventLog = [{
            _id: 0,
            date: new Date(123)
        }, {
            _id: 1,
            date: new Date(123)
        }]
        const wrapper = shallow(<Log eventLog={eventLog} />);
        const eventComponents = wrapper.find(SingleEventComponent);
        expect(eventComponents.length).toEqual(eventLog.length);

    });

});