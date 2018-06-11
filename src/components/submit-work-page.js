import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import SubmitWorkForm from './submit-work-form';

import './styles/submit-work-page.css';

export function SubmitWorkPage(props) {
	// If we are logged in (which happens automatically when registration
	// is successful) redirect to the user's dashboard

	if (props.isLoggedIn) {
		return <Redirect to="/" />;
	}

	return (
		<section className="submit-work">
			<div className="submit-work-container">
				<SubmitWorkForm/>
			</div>
		</section>
	);
}

const mapStateToProps = state => ({
	isLoggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SubmitWorkPage);