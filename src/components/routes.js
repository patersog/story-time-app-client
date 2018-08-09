import React from 'react';
import {Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';

import Home from './home';
import SubmitWorkPage from './pages/submit-work-page';
import RegistrationPage from './pages/registration-page';
import LoginPage from './pages/login-page';
import About from './about';
import StoryPage from './pages/story-page';
import DoesNotExist from './does-not-exist';

export function Routes(props) {
	const {isLoggedIn} = props;
	return (
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route path="/login" render={routerProps => <LoginPage {...routerProps} isLoggedIn={isLoggedIn}/>}/>
			<Route path="/register" render={routerProps => <RegistrationPage {...routerProps} isLoggedIn={isLoggedIn}/>}/>
			<Route path="/about" component={About}/>
			<Route exact path="/submit" render={routerProps => <SubmitWorkPage {...routerProps} isLoggedIn={isLoggedIn}/>}/>
			<Route path="/:id" component={StoryPage}/>
			<Route render={() => DoesNotExist()}/>
		</Switch>
	);
}

Routes.propTypes = {
	isLoggedIn: PropTypes.bool
};

export default Routes;