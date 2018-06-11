import React from 'react';

import NavigationBar from './navigation-bar';
import LoginForm from './login-form';
import Profile from './profile';

import './styles/site-header.css';

export function SiteHeader(props){

	const HeaderComponent = props.isLoggedIn ? <Profile/> : <LoginForm/> ;
	return(
		<header>
			<div className="header-container">
				<div className="left-header">
					<div className="left-header-left">
						<h1>Storytime</h1>
					</div>
					<div className="left-header-right">
						<NavigationBar/>
					</div>
				</div>
				<div className="right-header">
					{HeaderComponent}
				</div>
			</div>
		</header>
	);
}

export default SiteHeader;
