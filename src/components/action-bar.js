import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles/action-bar.css';

export function ActionBar(props){

	const renderSubmitButton = () => {
		return <Link className="go-submit" role="button" to="/submit">Submit A Work</Link>;
	};

	const submitButton = props.isLoggedIn ? renderSubmitButton() : undefined;
	return(
		<div className="action-bar">
			{submitButton}
		</div>
	);
}

const mapStateToProps = state => ({
	isLoggedIn : state.auth.currentUser !== null
});

ActionBar.propTypes = {
	isLoggedIn: PropTypes.bool
};

export default connect(mapStateToProps)(ActionBar);