import React from 'react';
import { shallow, mount } from 'enzyme';

import { Log } from './Log';

describe ('<Log />', () => {
    it('Renders without crashing', () => {
        shallow(<Log />);
    });

    it('Renders with proper data', () => {
        const wrapper = shallow(<Log 
            dispatch={ () => {} } 
            eventLog={ [] }
        />);

        expect(wrapper.find('h2').length).toEqual(1)
    });


// I think this one is wrong - how to test compDidMount?
    it('Fires the correct dispatch', () => {
        // const callback = jest.fn();
        // const wrapper = mount(<Log componentDidMount={ callback }/>);
        // expect(callback).toHaveBeenCalled();
    });

// not sure how to do this one
    it('Renders the single events', () => {
        // const wrapper = shallow(<Log cards={seedCards} />);
        // const cards = wrapper.find(Card);
        // expect(cards.length).toEqual(seedCards.length);
        // const firstCard = cards.first();
        // expect(firstCard.prop('text')).toEqual(seedCards[0].text);
    });

});