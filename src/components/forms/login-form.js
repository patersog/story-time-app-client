import React from 'react';
import {connect} from 'react-redux';

import Field from './field';
import Form from './form';

import {login} from '../../actions/auth';

export class LoginForm extends React.Component {

	state = {
		error: null
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
	}

	render() {

		let error = null;
		if(this.state.error) {
			error = (
				<div className="form-error" aria-live="polite">
					{this.state.error}
				</div>
			);
		}

		return(
			<Form
				onSubmit={this.submit}
				{...this.props}
			>
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
					pattern="^([a-zA-Z0-9].{8,72})$"
					onChange={dataObj => this.changeHandler(dataObj)}
					title={'must contain at least 8 letters and/or numbers'}
					required
				/>
				{error}
				<div className="login-button-holder">
					<button
						data-tooltip
						aria-haspopup="true"
						className="btn login"
						type="submit"
						title={'login'}
					>
					log in
					</button>
				</div>
			</Form>
		);
	}
}

const mapStateToProps = state => ({
	loginError: state.auth.error
});

export default connect(mapStateToProps)(LoginForm);
