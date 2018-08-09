import React from 'react';
import PropTypes from 'prop-types';

import './styles/profile.css';

export function Profile(props) {

	const username = props.username !== undefined ? props.username :'Guest';

	return (
		<div className="profile">
			<p className="p-text">Welcome <span className="p-name">{username}</span></p>
		</div>
	);
}

Profile.propTypes = {
	username: PropTypes.string
};

export default Profile;