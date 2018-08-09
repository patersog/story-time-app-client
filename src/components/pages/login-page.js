import React from 'react';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

import Page from './page';
import LoginForm from '../forms/login-form';

export function LoginPage(props) {

	if(props.isLoggedIn) {
		return <Redirect to="/"/>;
	}

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

LoginPage.propTypes = {
	isLoggedIn: PropTypes.bool
};

export default LoginPage;