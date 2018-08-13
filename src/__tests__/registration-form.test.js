import React from 'react';
import {shallow} from 'enzyme';

import {RegistrationForm} from '../components/forms/registration-form';
import Form from '../components/forms/form';
import Field from '../components/forms/field';

describe('<RegistrationForm />', () => {

	let wrapper;
	let dispatch;

	//Smoke test
	it( 'should render without crashing', () => {
		shallow(<RegistrationForm />);
	});

	it('should contain the correct form fields ', () => {
		wrapper = shallow(<RegistrationForm />);
		expect(wrapper.find('Field #firstname')).toHaveLength(1);
		expect(wrapper.find('Field #lastname')).toHaveLength(1);
		expect(wrapper.find('Field #username')).toHaveLength(1);
		expect(wrapper.find('Field #password')).toHaveLength(1);
		expect(wrapper.find('Field #password-confirm')).toHaveLength(1);
		expect(wrapper.find('button[type="submit"]')).toHaveLength(1);
	});

	it('should update state on field change', () => {

	});
});