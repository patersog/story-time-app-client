import React from 'react';

import {shallow} from 'enzyme';

import {App} from '../components/app';
import SiteHeader from '../components/site-header';
import Routes from '../components/routes';


describe('<App />', () => {

	//Smoke test
	it( 'Should render without crashing', function() {
		shallow(<App />);
	});

	it( 'Should contain the SiteHeader', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find(SiteHeader)).toHaveLength(1);
	});

	it( 'Should contain the Routes', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find(Routes)).toHaveLength(1);
	});
});