import React from 'react';
import {SiteHeader} from '../site-header';
import {shallow} from 'enzyme';

describe('<SiteHeader />', () => {
	//Smoke test
	it( 'Should render without crashing', function() {
		shallow(<SiteHeader />);
	});
});