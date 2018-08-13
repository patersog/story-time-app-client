import jwt from 'jsonwebtoken';

import {
	CLEAR_AUTH,
	AUTH_REQUEST,
	AUTH_SUCCESS,
	AUTH_ERROR,
} from '../actions/action-types';

import {
	clearAuth,
	authRequest,
	authSuccess,
	authError,
	login,
	refreshAuthToken,
	registerUser
} from '../actions/auth';

import {API_BASE_URL} from '../config';

describe('Story Actions', () => {

	describe('Synchronous', () => {

		describe('authRequest', () => {
			it('Should return the action AUTH_REQUEST', () => {
				const action = authRequest();
				expect(action.type).toEqual(AUTH_REQUEST);
			});
		});

		describe('authSuccess', () => {
			it('Should return the action AUTH_SUCCESS', () => {
				const currentUser = {};
				const action = authSuccess(currentUser);
				expect(action.type).toEqual(AUTH_SUCCESS);
				expect(action.currentUser).toEqual(currentUser);
			});
		});

		describe('authError', () => {
			it('Should return the action AUTH_ERROR', () => {
				const error = Error('Error');
				const action = authError(error);
				expect(action.type).toEqual(AUTH_ERROR);
				expect(action.error).toEqual(error);
			});
		});

		describe('clearAuth', () => {
			it('Should return the action CLEAR_AUTH', () => {
				const action = clearAuth();
				expect(action.type).toEqual(CLEAR_AUTH);
			});
		});
	});

	describe('Asynchronous', () => {

		const user = {username:'test', password: 'test'};
		const config = {
			JWT_SECRET: 'secret',
			JWT_EXPIRY: '7d'
		};
		const token = jwt.sign({user}, config.JWT_SECRET, {
			subject: user.username,
			expiresIn: config.JWT_EXPIRY,
			algorithm: 'HS256'
		});

		describe('Unprotected', () => {
			describe('login', () => {

				beforeEach(() => {
					fetch.resetMocks();
				});

				it('should dispatch authSuccess', () => {

					const request = {
						'body': JSON.stringify(user),
						'headers': {
							'Content-Type': 'application/json'
						},
						'method': 'POST',
					};
					const url = `${API_BASE_URL}/auth/login`;

					fetch.mockResponse(JSON.stringify({authToken:token}));
					const dispatch = jest.fn();

					return login(user.username, user.password)(dispatch).then(() => {
						expect(fetch).toHaveBeenCalledWith(url, request);
						expect(dispatch).toHaveBeenCalledWith(authSuccess(user));
					});
				});
			});

			describe('registerUser', () => {

				beforeEach(() => {
					fetch.resetMocks();
				});

				it('should dispatch authRequest', () => {

					const request = {
						'body': JSON.stringify(user),
						'headers': {
							'Content-Type': 'application/json'
						},
						'method': 'POST',
					};
					const url = `${API_BASE_URL}/users`;

					fetch.mockResponse(JSON.stringify(user));
					const dispatch = jest.fn();

					return registerUser(user)(dispatch).then(() => {
						expect(fetch).toHaveBeenCalledWith(url, request);
						expect(dispatch).toHaveBeenCalledWith(authRequest());
					});

				});

			});
		});

		describe('Protected', () => {
			beforeEach(() => {
				fetch.resetMocks();
				localStorage.setItem('authToken', token);
			});

			afterEach(() => {
				localStorage.clear();
			});

			describe('refreshAuthToken', () => {
				it('should dispatch authSuccess', () => {
					const request = {
						'headers': {
							'Authorization': `Bearer ${token}`
						},
						'method': 'POST',
					};
					const url = `${API_BASE_URL}/auth/refresh`;

					fetch.mockResponse(JSON.stringify({authToken:token}));
					const dispatch = jest.fn();

					return refreshAuthToken()(dispatch).then(() => {
						expect(fetch).toHaveBeenCalledWith(url, request);
						expect(dispatch).toHaveBeenCalledWith(authSuccess(user));
					});
				});
			});
		});
	});
});