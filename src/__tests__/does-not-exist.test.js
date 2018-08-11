import React from 'react';
import {DoesNotExist} from '../does-not-exist';
import {shallow} from 'enzyme';

describe('<DoesNotExist />', () => {
	//Smoke test
	it( 'Should render without crashing', function() {
		shallow(<DoesNotExist />);
	});
});