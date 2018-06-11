import React from 'react';
import {connect} from 'react-redux';

import SiteHeader from './site-header';
import Routes from './routes';
import './styles/app.css';

export function App(props) {
	return (
		<div className="app">
			<SiteHeader isLoggedin={props.isLoggedIn}/>
			<Routes isLoggedin={props.isLoggedIn}/>
		</div>
	);
}

const mapStateToProps = state => ({
	isLoggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(App);
