import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles/page.css';

export function Page(props) {
	if (props.isLoggedIn) {
		return <Redirect to="/"/>;
	}

	return (
		<React.Fragment>
			{props.children}
		</React.Fragment>
	);
}

const mapStateToProps = state => ({
	isLoggedIn: state.auth.currentUser !== null
});

Page.propTypes = {
	isLoggedIn: PropTypes.bool,
	children: PropTypes.any,
	dispatch: PropTypes.func
};

export default connect(mapStateToProps)(Page);