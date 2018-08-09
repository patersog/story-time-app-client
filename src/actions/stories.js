import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

import {
	STORY_REQUEST,
	STORIES_SUCCESS,
	STORY_SUCCESS,
	STORY_ERROR,
	SET_STORY,
	EDIT_STORY,
	ADD_STORY,
	UPDATE_STORY,
	SEARCH_STORY,} from './action-types';


export const fetchStoryRequest = () => ({
	type: STORY_REQUEST,
	loading: true
});

export const fetchStoriesSuccess = stories => ({
	type: STORIES_SUCCESS,
	stories,
	loading: false
});

export const fetchStorySuccess = story => ({
	type: STORY_SUCCESS,
	story,
	loading: false
});

export const fetchStoryError = error => ({
	type: STORY_ERROR,
	error,
	loading: false
});

export const setStory = story => ({
	type: SET_STORY,
	story
});

export const editStory = editing => ({
	type: EDIT_STORY,
	editing
});

export const updateStory = story => ({
	type: UPDATE_STORY,
	story
});

export const addStory = story => ({
	type: ADD_STORY,
	story
});

export const searchStory = searchText => ({
	type: SEARCH_STORY,
	searchText
});

// Async Action to fetch all stories
export const fetchStories = () => dispatch => {
	dispatch(fetchStoryRequest());
	return ( fetch(`${API_BASE_URL}/stories`)
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(stories => dispatch(fetchStoriesSuccess(stories)))
		.catch(err => dispatch(fetchStoryError(err)))
	);
};

// Async Action to fetch one story
export const fetchStory = id => dispatch => {
	dispatch(fetchStoryRequest());
	return ( fetch(`${API_BASE_URL}/stories/${id}`)
		.then(res => normalizeResponseErrors(res))
		.then(res => {
			return res.json();
		})
		.then(story => {
			return dispatch(fetchStorySuccess(story));
		})
		.catch(err => dispatch(fetchStoryError(err)))
	);
};

// Async Action to submit one story
export const submitNewStory = story => (dispatch) => {
	dispatch(fetchStoryRequest());
	const authToken = localStorage.getItem('authToken');
	return ( fetch(`${API_BASE_URL}/stories`,{
		method: 'POST',
		body: JSON.stringify(story),
		headers: {
			'Content-Type':'application/json',
			Authorization: `Bearer ${authToken}`
		},
		mode:'cors'
	})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(res => dispatch(fetchStorySuccess(res)))
		.catch(err => {
			const {code} = err;
			const message = code === 401 ? 'Unauthorized, please login to submit this story' : 'Unable to Submit, please try again';
			dispatch(fetchStoryError(err));
			return Promise.reject(
				new SubmissionError({
					_error: message
				})
			);
		})
	);
};

// Async Action to edit a single story
export const submitEditedStory = story => (dispatch) => {
	dispatch(fetchStoryRequest());
	const authToken = localStorage.getItem('authToken');
	return ( fetch(`${API_BASE_URL}/stories/${story.id}`,{
		method: 'PUT',
		body: JSON.stringify(story),
		headers: {
			'Content-Type':'application/json',
			Authorization: `Bearer ${authToken}`
		},
		mode:'cors'
	})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(res => dispatch(fetchStorySuccess(res)))
		.catch(err => {
			const {code} = err;
			const message = code === 401 ? 'Unauthorized, please login to submit this story' : 'Unable to Submit, please try again';
			dispatch(fetchStoryError(err));
			return Promise.reject(
				new SubmissionError({
					_error: message
				})
			);
		})
	);
};


// Async Action to delete a single story
export const deleteStory = story => (dispatch) => {
	console.log(story);
	dispatch(fetchStoryRequest());
	const authToken = localStorage.getItem('authToken');
	return ( fetch(`${API_BASE_URL}/stories/${story.id}`,{
		method: 'DELETE',
		body: JSON.stringify(story),
		headers: {
			'Content-Type':'application/json',
			Authorization: `Bearer ${authToken}`
		},
		mode:'cors'
	})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.catch(err => {
			const {code} = err;
			const message = code === 401 ? 'Unauthorized, please login to submit this story' : 'Unable to Submit, please try again';
			dispatch(fetchStoryError(err));
			return Promise.reject(
				new SubmissionError({
					_error: message
				})
			);
		})
	);
};