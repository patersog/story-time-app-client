import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';

import Input from './input';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';

import './styles/registration-form.css';

const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export function RegistrationForm(props){

	const onSubmit = ({username, password, firstName, lastName}) => {

		const user = {username, password, firstName, lastName};

		return props
			.dispatch(registerUser(user))
			.then(() => props.dispatch(login(username, password)));
	};

	return (
		<form
			className="registration-form"
			onSubmit={props.handleSubmit(values => onSubmit(values))}>
			<label htmlFor="firstName">First name</label>
			<Field
				className="registration-form-input"
				component={Input}
				type="text"
				name="firstName"
			/>
			<label htmlFor="lastName">Last name</label>
			<Field
				className="registration-form-input"
				component={Input}
				type="text"
				name="lastName"
			/>
			<label htmlFor="username">Username</label>
			<Field
				className="registration-form-input"
				component={Input}
				type="text"
				name="username"
				validate={[required, nonEmpty, isTrimmed]}
			/>
			<label htmlFor="password">Password</label>
			<Field
				className="registration-form-input"
				component={Input}
				type="password"
				name="password"
				validate={[required, passwordLength, isTrimmed]}
			/>
			<label htmlFor="passwordConfirm">Confirm password</label>
			<Field
				className="registration-form-input"
				component={Input}
				type="password"
				name="passwordConfirm"
				validate={[required, nonEmpty, matchesPassword]}
			/>
			<div className="button-holder">
				<button
					type="submit"
					className="btn"
					disabled={props.pristine || props.submitting}>
					Register
				</button>
			</div>
		</form>
	);
}

export default reduxForm({
	form: 'registration',
	onSubmitFail: (errors, dispatch) => {
		console.log(errors);
		dispatch(focus('registration', Object.keys(errors)[0]));
	}
})(RegistrationForm);