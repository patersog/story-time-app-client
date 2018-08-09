import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import SiteHeader from './site-header';
import Routes from './routes';

import './styles/app.css';

export function App(props) {
	const {location, dispatch, currentUser, isLoggedIn} = props;
	let username = undefined;
	if(currentUser) {
		username = currentUser.username;
	}
	return (
		<div className="app">
			<SiteHeader location={location} username={username} dispatch={dispatch}/>
			<main className="main">
				<Routes isLoggedIn={isLoggedIn}/>
			</main>
		</div>
	);
}

const mapStateToProps = state => ({
	isLoggedIn: state.auth.currentUser !== null,
	currentUser: state.auth.currentUser,
});

App.propTypes = {
	location: PropTypes.object,
	isLoggedIn: PropTypes.bool,
	currentUser: PropTypes.object,
	dispatch: PropTypes.func
};

export default withRouter(connect(mapStateToProps)(App));
