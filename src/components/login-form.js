import React from 'react';
import {Link} from 'react-router-dom';
import {Field, reduxForm, focus} from 'redux-form';

import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';

import './styles/login-form.css';

export function LoginForm(props){

	const onSubmit = (values) => {
		return props.dispatch(login(values.username, values.password));
	};

	let error;
	if(props.error) {
		error = (
			<div className="login-form-error" aria-live="polite">
				{this.props.error}
			</div>
		);
	}
	return (
		<form className="login-form" onSubmit={props.handleSubmit(values => onSubmit(values))}>
			{error}
			<Field className="login-form-input" component={Input} type="text" name="username" id="username" placeholder="username" aria-label="username" validate={[required, nonEmpty]}/>
			<Field className="login-form-input" component={Input} type="password" name="password" id="password" placeholder="password" aria-label="password" validate={[required, nonEmpty]}/>
			<div className="button-holder"><button className="login-in-btn" disabled={props.pristine || props.submitting}>log in</button></div>
			<Link className="sing-up" to="/register">sign up</Link>
		</form>
	);
}

export default reduxForm({
	form: 'login',
	onSubmitFail: (errors, dispatch) => dispatch(focus('login', Object.keys(errors)[0]))
})(LoginForm);