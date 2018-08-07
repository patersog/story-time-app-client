import React from 'react';

import Page from './page';
import RegistrationForm from '../forms/registration-form';

export function RegistrationPage() {
	return (
		<Page>
			<section className="registration sec">
				<div className="sec-container">
					<RegistrationForm title={'register'}/>
				</div>
			</section>
		</Page>
	);
}

export default RegistrationPage;