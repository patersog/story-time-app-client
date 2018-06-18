import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {clearAuth} from '../actions/auth';
import {setStory} from '../actions/stories';

import './styles/profile.css';

export function Profile(props) {

	let username;

	if(props.currentUser) {
		username = props.currentUser.username;
		return (
			<div className="profile">
				<p className="profile-name">Welcome, {username}</p>
				<Link to="/" className="btn logout" role="button" onClick={() => props.dispatch(clearAuth())}>Logout</Link>
			</div>
		);
	}

	username = 'Guest';
	return (
		<div className="profile">
			<p className="profile-name">Welcome {username}</p>
			<Link  to="/login" className="btn" role="button" onClick={() => props.dispatch(setStory({}))}>Login</Link>
		</div>
	);
}

const mapStateToProps = state => ({
	currentUser: state.auth.currentUser
});

Profile.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	currentUser: PropTypes.string
};



export default connect(mapStateToProps)(Profile);