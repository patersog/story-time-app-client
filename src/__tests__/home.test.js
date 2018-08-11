import React from 'react';
import {Home} from '../home';
import {shallow} from 'enzyme';

describe('<Home />', () => {
	//Smoke test
	it( 'Should render without crashing', function() {
		shallow(<Home />);
	});
});