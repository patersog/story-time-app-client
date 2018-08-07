import React from 'react';
import {connect} from 'react-redux';

import Form from './form';
import Field from './field';

import {registerUser} from '../../actions/users';
import {login} from '../../actions/auth';
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

	};

	render() {

		let error = null;
		if(this.state.error) {
			error = (
				<div className="form-error" aria-live="polite">
					{this.props.error}
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
					tooltip={'I am a tooltip'}
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
					tooltip={'I am a tooltip'}
					required
				/>
				<Field
					label="confirm password"
					type="password"
					name="passwordConfirm"
					onChange={dataObj => this.changeHandler(dataObj)}
					required
				/>
				<div className="button-holder">
					<button
						type="submit"
						className="btn"
					>
						Register
					</button>
				</div>
			</Form>
		);
	}
}

export default connect()(RegistrationForm);