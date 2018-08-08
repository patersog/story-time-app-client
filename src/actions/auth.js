import jwtDecode from 'jwt-decode';
import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {
	SET_AUTH_TOKEN,
	CLEAR_AUTH,
	CLEAR_AUTH_ERROR,
	AUTH_REQUEST,
	AUTH_SUCCESS,
	AUTH_ERROR,
	SET_DIALOG
} from './action-types';

export const setAuthToken = authToken => ({
	type: SET_AUTH_TOKEN,
	authToken
});

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

export const clearAuthError = error => ({
	type: CLEAR_AUTH_ERROR,
	error
});

export const setDialog = dialog => ({
	type: SET_DIALOG,
	dialog
});

// Stores the auth token in state and localStorage, and decodes and stores
// the user data stored in the token
const storeAuthInfo = (authToken, dispatch) => {
	const decodedToken = jwtDecode(authToken);
	dispatch(setAuthToken(authToken));
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

export const refreshAuthToken = () => (dispatch, getState) => {
	dispatch(authRequest());
	const authToken = getState().auth.authToken;
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
		.then(res => {
			return normalizeResponseErrors(res);
		})
		.then(res => {
			return res.json();
		})
		.then(res => console.log(res))
		.catch(err => {
			const {reason, message, location} = err;
			if (reason === 'ValidationError') {
				return Promise.reject(
					new SubmissionError({
						[location]: message
					})
				);
			}
		});
};