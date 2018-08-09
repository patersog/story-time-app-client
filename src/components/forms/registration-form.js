import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Form from './form';
import Field from './field';

import {login, registerUser} from '../../actions/auth';
import {empty as isEmpty, matches, trimmed as isTrimmed} from '../../validators';

const matchesPassword = matches('password');

/**
 * regex for username and password ^[a-zA-Z0-9].{8,72}$
 * Assumes that all input will be exclusively text and digits between 8 and 72 characters in length,
 */

export class RegistrationForm extends React.Component {

	state = {
		error: null
	};

	isValid = () => {

	}

	changeHandler = (dataObj) => {
		const{name, value} = dataObj;
		let field = {};
		field[name] = value;
		this.setState((prevState) => {
			return Object.assign(prevState, field);
		});
	}

	submit = () => {
		if(this.isValid) {
			const {username, password,firstName, lastName} = this.state;
			const newUser = {username,password,firstName, lastName};
			return this.props.dispatch(registerUser(newUser))
				.then(() => this.props.dispatch(login(username, password)));
		}
	};

	render() {

		let error = undefined;
		if(this.props.registrationError) {
			error = (
				<div className="form-error-container" aria-live="polite">
					<span className="error-message">{this.props.registrationError}</span>
				</div>
			);
		}

		return (
			<Form
				onSubmit={this.submit}
				{...this.props}
			>
				<Field
					label="first name"
					name="firstName"
					type="text"
					onChange={dataObj => this.changeHandler(dataObj)}
				/>
				<Field
					label="last name"
					name="lastName"
					type="text"
					onChange={dataObj => this.changeHandler(dataObj)}
				/>
				<Field
					label="username"
					name="username"
					type="text"
					minLength={10}
					maxLength={72}
					pattern="^([a-zA-Z0-9].{8,72})$"
					onChange={dataObj => this.changeHandler(dataObj)}
					autoComplete="off"
					title={'must contain at least 8 letters and/or numbers'}
					required
				/>
				<Field
					label="password"
					name="password"
					type="password"
					minLength={8}
					maxLength={72}
					pattern="^([a-zA-Z0-9]{8,72})$"
					onChange={dataObj => this.changeHandler(dataObj)}
					autoComplete="off"
					title={'must contain at least 8 letters and/or numbers'}
					required
				/>
				<Field
					label="confirm password"
					type="password"
					name="passwordConfirm"
					onChange={dataObj => this.changeHandler(dataObj)}
					autoComplete="off"
					title={'must match password'}
					required
				/>
				<div className="button-holder">
					<button type="submit" className="btn form" title={'register button'}>
						Register
					</button>
				</div>
				{error}
			</Form>
		);
	}
}

const mapStateToProps = state => ({
	registrationError: state.auth.error
});

RegistrationForm.propTypes = {
	dispatch: PropTypes.func,
	registrationError: PropTypes.string
};

export default connect(mapStateToProps)(RegistrationForm);