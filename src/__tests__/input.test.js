import React from 'react';
import {Input} from '../input';
import {shallow} from 'enzyme';

describe('<Input />', () => {
	//Smoke test
	it( 'Should render without crashing', function() {
		shallow(<Input />);
	});
});