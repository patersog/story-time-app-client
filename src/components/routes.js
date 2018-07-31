import React from 'react';
import {Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthRoute from './auth-route';
import Home from './home';
import SubmitWorkPage from './pages/submit-work-page';
import RegistrationPage from './pages/registration-page';
import LoginPage from './pages/login-page';
import About from './about';
import StoryPage from './pages/story-page';
import DoesNotExist from './does-not-exist';

export function Routes(props) {
	return (
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route path="/login" component={LoginPage}/>
			<Route path="/register" component={RegistrationPage}/>
			<Route path="/about" component={About}/>
			<Route path="/:id" component={StoryPage}/>
			<AuthRoute path="/submit" component={SubmitWorkPage} loggedIn={props.isloggedIn}/>
			<Route render={() => DoesNotExist()}/>
		</Switch>
	);
}

Routes.propTypes = {
	isloggedIn: PropTypes.bool
};

export default Routes;