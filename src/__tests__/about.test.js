import React from 'react';
import {About} from '../about';
import {shallow} from 'enzyme';

//DONE!

describe('<About />', () => {
	//Smoke test
	it( 'Should render without crashing', function() {
		shallow(<About />);
	});

	it('Should have the correct container class', function() {
		const wrapper = shallow(<About />);
		expect(wrapper.hasClass('about')).toBe(true);
	});
});