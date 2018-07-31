import React from 'react';
import PropTypes from 'prop-types';

import './styles/profile.css';

export function Profile(props) {

	const username = props.currentUser ? props.currentUser.username :'Guest';

	return (
		<div className="profile">
			<p className="profile-name">Welcome {username}</p>
		</div>
	);
}

Profile.propTypes = {
	currentUser: PropTypes.string
};

export default Profile;