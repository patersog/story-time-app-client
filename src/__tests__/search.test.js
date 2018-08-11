import React from 'react';
import {Search} from '../search';
import {shallow} from 'enzyme';

describe('<Search />', () => {
	//Smoke test
	it( 'Should render without crashing', function() {
		shallow(<Search />);
	});
});