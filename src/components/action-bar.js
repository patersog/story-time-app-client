import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import './styles/action-bar.css';

export function ActionBar(props){

	const renderSubmitButton = () => {
		return <Link to="/submit">Submit A Work!</Link>;
	};

	const submitButton = props.isloggedIn ? renderSubmitButton() : undefined;
	return(
		<div className="action-bar">
			{submitButton}
		</div>
	);
}

const mapStateToProps = state => ({
	isloggedIn : state.auth.currentUser !== null
});

export default connect(mapStateToProps)(ActionBar);