import React from 'react';
import {ListActionDisplay} from '../list-action-display';
import {shallow} from 'enzyme';

describe('<ListActionDisplay />', () => {
	//Smoke test
	it( 'Should render without crashing', function() {
		shallow(<ListActionDisplay />);
	});
});