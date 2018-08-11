import React from 'react';
import {ActionBar} from '../action-bar';
import {shallow} from 'enzyme';
import {Link} from 'react-router-dom';

describe('<ActionBar />', () => {
	//Smoke test
	it( 'Should render without crashing', () => {
		const loggedIn = true;
		shallow(<ActionBar loggedIn={loggedIn}/>);
	});

	it( 'Should render submit link if logged in', () => {
		const loggedIn = true;
		const wrapper = shallow(<ActionBar loggedIn={loggedIn}/>);
		console.log(wrapper.debug());
		expect(wrapper.contains(<Link to="/submit">Submit A Work!</Link>)).toBe(true);
	});

	it( 'Should not render submit link not logged in', () => {
		const loggedIn = false;
		const wrapper = shallow(<ActionBar loggedIn={loggedIn}/>);
		console.log(wrapper.debug());
		expect(wrapper.contains(<Link to="/submit">Submit A Work!</Link>)).toBe(false);
	});
});