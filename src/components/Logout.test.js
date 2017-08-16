import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Logout } from './Logout';
import { BrowserRouter as Router } from 'react-router-dom'
import { history } from '../store'

describe ('<Logout />', () => {

    it('renders correctly', () => {
        const tree = renderer.create(
            <Router history={ history }>
                <Logout />
            </Router>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // it('Renders without crashing', () => {
    //     shallow(<Logout />);
    // });

    it('Renders with proper data', () => {
        const wrapper = shallow(<Logout 
            dispatch={ () => {} } 
            logout={ [] }
        />);

        expect(wrapper.find('Link').length).toEqual(1)
    });


});