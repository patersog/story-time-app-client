import React from 'react';
import {RegistrationPage} from '../registration-page';
import {shallow} from 'enzyme';

describe('<RegistrationPage />', () => {
	//Smoke test
	it( 'Should render without crashing', function() {
		shallow(<RegistrationPage />);
	});
});