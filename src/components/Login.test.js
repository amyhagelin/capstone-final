import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Login } from './Login';
import { ConnectedRouter } from 'react-router-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import { history } from '../store'

describe ('<Login />', () => {

    it('renders correctly', () => {
        const ui = {
            alert: 'this is the alert message'
        }
        const tree = renderer.create(
            <Router history={ history }>
                <Login ui={ ui } dispatch={ () => {} }/>
            </Router>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Renders with proper data', () => {
        const ui = {
            alert: 'this is the alert message'
        }
        const wrapper = shallow(  
            <Login ui={ ui } dispatch={ () => {} }/>
        );

        expect(wrapper.find('input').length).toEqual(2)
    });


});