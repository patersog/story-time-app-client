import React from 'react';
import {ListActionDisplay} from '../list-action-display';
import {shallow} from 'enzyme';

import {login, registerUser} from '../actions/auth';


describe('<ListActionDisplay />', () => {
	let wrapper;
	//Smoke test

	it('should render without crashing', () => {
		shallow(<ListActionDisplay />);
	});
});