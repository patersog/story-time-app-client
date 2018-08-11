import React from 'react';
import {NavigationBar} from '../navigation-bar';
import {shallow} from 'enzyme';

describe('<NavigationBar />', () => {
	//Smoke test
	it( 'Should render without crashing', function() {
		shallow(<NavigationBar />);
	});
});