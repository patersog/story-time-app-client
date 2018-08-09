import jwtDecode from 'jwt-decode';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {
	CLEAR_AUTH,
	AUTH_REQUEST,
	AUTH_SUCCESS,
	AUTH_ERROR,
	SET_DIALOG
} from './action-types';

export const clearAuth = () => ({
	type: CLEAR_AUTH
});

export const authRequest = () => ({
	type: AUTH_REQUEST
});

export const authSuccess = currentUser => ({
	type: AUTH_SUCCESS,
	currentUser
});

export const authError = error => ({
	type: AUTH_ERROR,
	error
});

export const setDialog = dialog => ({
	type: SET_DIALOG,
	dialog
});

// Stores the auth token in localStorage, and decodes and stores
export const storeAuthInfo = (authToken, dispatch) => {
	const decodedToken = jwtDecode(authToken);

	localStorage.setItem('authToken', authToken);
	dispatch(authSuccess(decodedToken.user));
};

export const login = (username, password) => dispatch => {
	dispatch(authRequest());
	return (
		fetch(`${API_BASE_URL}/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username,
				password
			})
		})
	// Reject any requests which don't return a 200 status, creating
	// errors which follow a consistent format
			.then(res => normalizeResponseErrors(res))
			.then(res => res.json())
			.then(({authToken}) => storeAuthInfo(authToken, dispatch))
			.catch(err => {
				dispatch(authError(err.message));
			})
	);
};

export const refreshAuthToken = () => (dispatch) => {
	dispatch(authRequest());
	const authToken = localStorage.getItem('authToken');
	return fetch(`${API_BASE_URL}/auth/refresh`, {
		method: 'POST',
		headers: {
			// Provide our existing token as credentials to get a new one
			Authorization: `Bearer ${authToken}`
		}
	})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(({authToken}) => storeAuthInfo(authToken, dispatch))
		.catch(err => {
			// We couldn't get a refresh token because our current credentials
			// are invalid or expired, or something else went wrong, so clear
			// them and sign us out
			dispatch(authError(err));
			dispatch(clearAuth());
		});
};

export const registerUser = user => dispatch => {
	return fetch(`${API_BASE_URL}/users`, {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(user)
	})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.catch(err => {
			dispatch(authError(err.message));
		});
};

export const logout = () => dispatch => {
	dispatch(clearAuth());
	localStorage.removeItem('authToken');
};