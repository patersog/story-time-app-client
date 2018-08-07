import React from 'react';

import Page from './page';
import LoginForm from '../forms/login-form';

export function LoginPage() {

	return (
		<Page>
			<section className="login sec">
				<div className="sec-container">
					<LoginForm title={'login'}/>
				</div>
			</section>
		</Page>
	);
}

export default LoginPage;