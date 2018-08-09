import React from 'react';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

import Page from './page';
import SubmitWorkForm from '../forms/submit-work-form';

export function SubmitWorkPage(props) {

	if(!props.isLoggedIn) {
		return <Redirect to="/"/>;
	}

	return (
		<Page>
			<section className="submit-work sec">
				<div className="sec-container">
					<SubmitWorkForm title={'submit work'}/>
				</div>
			</section>
		</Page>
	);
}

SubmitWorkPage.propTypes = {
	isLoggedIn: PropTypes.bool
};

export default SubmitWorkPage;