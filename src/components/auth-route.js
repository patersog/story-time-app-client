import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

export const AuthRoute = ({component: Component, ...rest}) => {
	return (
		<Route {...rest} render={(props) =>
		{
			return rest.loggedIn? <Component {...props}/> : <Redirect to="/"/>;
		}}
		/>
	);
};

AuthRoute.propTypes = {
	component: PropTypes.func
};

export default AuthRoute;