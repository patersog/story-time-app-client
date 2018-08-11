import React from 'react';
import {Profile} from '../profile';
import {shallow} from 'enzyme';

describe('<Profile />', () => {
	//Smoke test
	it( 'Should render without crashing', function() {
		shallow(<Profile />);
	});
});