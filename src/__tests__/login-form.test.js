import React from 'react';
import {LoginForm} from '../login-form';
import {shallow} from 'enzyme';

describe('<LoginForm />', () => {
	//Smoke test
	it( 'Should render without crashing', function() {
		shallow(<LoginForm />);
	});
});