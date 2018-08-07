import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {clearAuth} from '../actions/auth';
import {setStory} from '../actions/stories';

import './styles/navigation-bar.css';

export function NavigationBar(props) {

	const {location} = props;

	if(props.currentUser) {
		return (
			<nav>
				<ul>
					<li className="link">
						<Link data-tooltip aria-haspopup="true" title="home" className={'btn' + ((location.pathname === '/') ? ' active' : '')} role="button" onClick={() => props.dispatch(setStory({}))} to="/">home</Link>
					</li>
					<li className="link">
						<Link data-tooltip aria-haspopup="true" title="about" className={'btn' + ((location.pathname === '/about') ? ' active' : '')} role="button" onClick={() => props.dispatch(setStory({}))} to="/about">about</Link>
					</li>
					<li className="link">
						<Link data-tooltip aria-haspopup="true" title="logout" className="btn" role="button" onClick={() => props.dispatch(clearAuth())} to="/">logout</Link>
					</li>
				</ul>
			</nav>
		);
	}

	return(
		<nav>
			<ul>
				<li className="link">
					<Link data-tooltip aria-haspopup="true" title="home" className={'btn' + ((location.pathname === '/') ? ' active' : '')} role="button" onClick={() => props.dispatch(setStory({}))} to="/">home</Link>
				</li>
				<li className="link">
					<Link data-tooltip aria-haspopup="true" title="about" className={'btn' + ((location.pathname === '/about') ? ' active' : '')} role="button" onClick={() => props.dispatch(setStory({}))} to="/about">about</Link>
				</li>
				<li className="link">
					<Link data-tooltip aria-haspopup="true" title="register" className={'btn' + ((location.pathname === '/register') ? ' active' : '')} role="button" onClick={() => props.dispatch(setStory({}))} to="/register">sign-up</Link>
				</li>
				<li className="link">
					<Link data-tooltip aria-haspopup="true" title="login" className='btn' role="button" onClick={() => props.dispatch(setStory({}))} to="/login">login</Link>
				</li>
			</ul>
		</nav>
	);
}

NavigationBar.propTypes = {
	currentUser: PropTypes.string,
	location: PropTypes.object,
	dispatch: PropTypes.func
};

export default NavigationBar;