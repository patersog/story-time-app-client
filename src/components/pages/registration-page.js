import React from 'react';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

import Page from './page';
import RegistrationForm from '../forms/registration-form';

export function RegistrationPage(props) {

	if(props.isLoggedIn) {
		return <Redirect to="/"/>;
	}

	return (
		<Page>
			<section className="registration sec">
				<div className="sec-container">
					<div className="inner">
						<div className="abs-scroll">
							<RegistrationForm title={'register'}/>
						</div>
					</div>
				</div>
			</section>
		</Page>
	);
}

RegistrationPage.propTypes = {
	isLoggedIn: PropTypes.bool
};

export default RegistrationPage;