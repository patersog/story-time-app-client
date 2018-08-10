import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

import Field from './field';
import Form from './form';

import {login} from '../../actions/auth';

import './styles/demo-account.css';

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
		const {username, password} = this.state;
		return this.props.dispatch(login(username, password));
	}

	render() {

		let error = null;
		if(this.props.loginError) {
			error = (
				<div className="form-error-container" aria-live="polite">
					<span className="error-message">{this.props.loginError}</span>
				</div>
			);
		}

		if(this.props.isLoggedIn) {
			return <Redirect to='/' />;
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
					minLength={1}
					maxLength={72}
					pattern="^[a-zA-Z0-9]{1,72}$"
					autoComplete="off"
					onChange={dataObj => this.changeHandler(dataObj)}
					title={'must contain at least 1 letters and/or numbers'}
					required
				/>
				<Field
					label="password"
					name="password"
					type="password"
					minLength={8}
					maxLength={72}
					pattern="^[a-zA-Z0-9]{8,72}$"
					autoComplete="off"
					onChange={dataObj => this.changeHandler(dataObj)}
					title={'must contain at least 8 letters and/or numbers'}
					required
				/>
				<div className="login-button-holder">
					<button
						data-tooltip
						aria-haspopup="true"
						className="btn form"
						type="submit"
						title={'login'}
					>
					log in
					</button>
				</div>
				<div className="demo-account"><span className="demo-sp">demo account</span>
					<div>
						<span className="demo-sp">username:</span> username10
					</div>
					<div>
						<span className="demo-sp">password:</span> password10
					</div>
				</div>
				{error}
			</Form>
		);
	}
}

const mapStateToProps = state => ({
	loginError: state.auth.error,
});

LoginForm.propTypes = {
	isLoggedIn: PropTypes.bool,
	dispatch: PropTypes.func,
	loginError: PropTypes.string
};

export default connect(mapStateToProps)(LoginForm);
