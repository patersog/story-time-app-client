import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

import AuthRoute from './auth-route';
import Home from './home';
import SubmitWorkPage from './submit-work-page';
import RegistrationPage from './submit-work-page';
import About from './about';
import StoryPage from './story-page';
import DoesNotExist from './does-not-exist';

export function Routes(props) {
	return (
		<Switch>
			<Route exact path="/" component={Home}/>
			<AuthRoute exact path="/submit" component={SubmitWorkPage} loggedIn={props.isloggedIn}/>
			<Route exact path="/about" component={About}/>
			<Route exact path="/register" component={RegistrationPage}/>
			<Route path="/:id" component={StoryPage}/>
			<Route render={() => DoesNotExist()}/>
		</Switch>
	);
}

export default withRouter(Routes);