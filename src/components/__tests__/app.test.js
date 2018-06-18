import React from 'react';

import {mount,shallow} from 'enzyme';

import {App} from '../app';
import SiteHeader from '../site-header';
import Routes from '../routes';


describe('<App />', () => {

	//Smoke test
	it( 'Should render without crashing', function() {
		shallow(<App />);
	});

	it( 'Should render the site header', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find(SiteHeader)).toHaveLength(1);
	});

	it( 'Should render the site header', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find(Routes)).toHaveLength(1);
	});

});