import React from 'react';
import {RegistrationForm} from '../registration-form';
import {shallow} from 'enzyme';

describe('<RegistrationForm />', () => {
	//Smoke test
	it( 'Should render without crashing', function() {
		shallow(<RegistrationForm />);
	});
});