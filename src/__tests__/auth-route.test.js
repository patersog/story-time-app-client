import React from 'react';
import {AuthRoute} from '../auth-route';
import {shallow} from 'enzyme';

describe('<AuthRoute />', () => {
	//Smoke test
	it( 'Should render without crashing', function() {
		shallow(<AuthRoute />);
	});
});