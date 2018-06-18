import React from 'react';
import {connect} from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom';

import LoginForm from './login-form';

import './styles/login-page.css';

export function LoginPage(props) {
	// If we are logged in (which happens automatically when registration
	// is successful) redirect to the user's dashboard

	if (props.isLoggedIn) {
		return <Redirect to="/" />;
	}

	return (
		<section className="login">
			<div className="login-container">
				<h2>Login</h2>
				<LoginForm/>
			</div>
		</section>
	);
}

const mapStateToProps = state => ({
	isLoggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);