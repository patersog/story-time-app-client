import React from 'react';

import Page from './page';
import RegistrationForm from '../forms/registration-form';

import './styles/registration-page.css';

export function RegistrationPage() {

	return (
		<Page>
			<section className="registration">
				<div className="registration-container">
					<h2>Register</h2>
					<RegistrationForm/>
				</div>
			</section>
		</Page>
	);
}

export default RegistrationPage;