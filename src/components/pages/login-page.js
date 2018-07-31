import React from 'react';

import Page from './page';
import LoginForm from '../forms/login-form';

import './styles/login-page.css';

export function LoginPage() {

	return (
		<Page>
			<section className="login">
				<div className="login-container">
					<h2>Login</h2>
					<LoginForm/>
				</div>
			</section>
		</Page>
	);
}

export default LoginPage;