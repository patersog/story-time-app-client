import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

import AuthRoute from './auth-route';
import Home from './home';
import SubmitWorkPage from './submit-work-page';
import RegistrationPage from './registration-page';
import LoginPage from './login-page';
import About from './about';
import StoryPage from './story-page';
import DoesNotExist from './does-not-exist';

export function Routes(props) {
	return (
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route path="/login" component={LoginPage}/>
			<Route path="/register" component={RegistrationPage}/>
			<Route path="/about" component={About}/>
			<AuthRoute path="/submit" component={SubmitWorkPage} loggedIn={props.isloggedIn}/>
			<Route path="/:id" component={StoryPage}/>
			<Route render={() => DoesNotExist()}/>
		</Switch>
	);
}

export default Routes;