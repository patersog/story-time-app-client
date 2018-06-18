import React from 'react';
import {ErrorDisplay} from '../error-display';
import {shallow} from 'enzyme';

describe('<ErrorDisplay />', () => {
	//Smoke test
	it( 'Should render without crashing', function() {
		shallow(<ErrorDisplay />);
	});
});