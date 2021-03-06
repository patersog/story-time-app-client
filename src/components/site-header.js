import React from 'react';
import PropTypes from 'prop-types';

import NavigationBar from './navigation-bar';
import Profile from './profile';

import './styles/site-header.css';

export function SiteHeader(props){
	return(
		<header>
			<div className="header-container">
				<div className="left-header">
					<h1>Storytime</h1>
				</div>
				<div className="right-header">
					{/* <Profile currentUser={props.currentUser} dispatch={props.dispatch}/> */}
					<div className="right-header-left">
						<Profile username={props.username} dispatch={props.dispatch}/>
					</div>
					<div className="right-header-right">
						<NavigationBar location={props.location} username={props.username} dispatch={props.dispatch}/>
					</div>
				</div>
			</div>
		</header>
	);
}

SiteHeader.propTypes = {
	username: PropTypes.string,
	location: PropTypes.object,
	dispatch: PropTypes.func
};

export default SiteHeader;
