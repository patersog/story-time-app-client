import React from 'react';
import {connect} from 'react-redux';

import Form from './form';
import Field from './field';

import {login, registerUser} from '../../actions/auth';
import {empty as isEmpty, matches, length, trimmed as isTrimmed} from '../../validators';

const isLongEnough = length({min: 10, max: 72});
const matchesPassword = matches('password');

/**
 * regex for username and password ^[a-zA-Z0-9].{8,72}$
 * Assumes that all input will be exclusively text and digits between 8 and 72 characters in length,
 */

export class RegistrationForm extends React.Component {

	state = {
		error: null
	};

	validatePassword = () => {

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
		console.log(this.state);
	};

	render() {

		let error = undefined;
		if(this.state.error) {
			error = (
				<div className="form-error" aria-live="polite">
					{this.state.error}
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
					title={'must contain at least 8 letters and/or numbers'}
					required
				/>
				<Field
					label="confirm password"
					type="password"
					name="passwordConfirm"
					onChange={dataObj => this.changeHandler(dataObj)}
					title={'must match password'}
					required
				/>
				{error}
				<div className="button-holder">
					<button type="submit" className="btn">
						Register
					</button>
				</div>
			</Form>
		);
	}
}

const mapStateToProps = state => ({
	registrationError: state.auth.error
});

export default connect(mapStateToProps)(RegistrationForm);