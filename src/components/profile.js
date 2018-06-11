import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {clearAuth} from '../actions/auth';

import './styles/profile.css';

export function Profile(props) {
	const user = props.currentUser ? props.currentUser : 'Loading...';
	return(
		<div className="profile">
			<p className="profile-name">username: {user.username}</p>
			<Link to="/" className="logout" role="button" onClick={() => props.dispatch(clearAuth())}>Logout</Link>
		</div>
	);
}

const mapStateToProps = state => ({
	currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Profile);