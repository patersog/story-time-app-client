import {
	STORY_REQUEST,
	STORY_SUCCESS,
	STORIES_SUCCESS,
	STORY_ERROR,
	SET_STORY,
	EDIT_STORY,
} from '../actions/action-types';

import {
	fetchStoryRequest,
	fetchStorySuccess,
	fetchStoriesSuccess,
	fetchStoryError,
	setStory,
	editStory,
	fetchStories,
	fetchStory,
	submitNewStory,
	submitEditedStory
} from '../actions/stories';

import {API_BASE_URL} from '../config';

describe('Story Actions', () => {

	describe('Synchronous', () => {

		describe('fetchStoryRequest', () => {
			it('Should return the action STORY_REQUEST', () => {
				const action = fetchStoryRequest();
				expect(action.type).toEqual(STORY_REQUEST);
				expect(action.loading).toEqual(true);
			});
		});

		describe('fetchStorySuccess', () => {
			it('Should return the action STORY_SUCCESS', () => {
				const story = {};
				const action = fetchStorySuccess(story);
				expect(action.type).toEqual(STORY_SUCCESS);
				expect(action.story).toEqual(story);
				expect(action.loading).toEqual(false);
			});
		});

		describe('fetchStoriesSuccess', () => {
			it('Should return the action STORIES_SUCCESS', () => {
				const stories = [];
				const action = fetchStoriesSuccess(stories);
				expect(action.type).toEqual(STORIES_SUCCESS);
				expect(action.stories).toEqual(stories);
				expect(action.loading).toEqual(false);
			});
		});

		describe('fetchStoryError', () => {
			it('Should return the action STORY_ERROR', () => {
				const error = Error('ERROR!');
				const action = fetchStoryError(error);
				expect(action.type).toEqual(STORY_ERROR);
				expect(action.error).toEqual(error);
				expect(action.loading).toEqual(false);
			});
		});

		describe('setStory', () => {
			it('Should return the action SET_STORY', () => {
				const story = {};
				const action = setStory(story);
				expect(action.type).toEqual(SET_STORY);
				expect(action.story).toEqual(story);
			});
		});

		describe('editStory', () => {
			it('Should return the action EDIT_STORY', () => {
				const action = editStory();
				expect(action.type).toEqual(EDIT_STORY);
			});
		});

	});


	describe('Asynchronous', () => {

		describe('Unprotected', () => {

			beforeEach(() => {
				fetch.resetMocks();
			});

			describe('fetchStory', () => {
				it('Should dispatch fetchStorySuccess', () => {

					const id = 1;
					const story = {text:'I am Some Test Text'};
					const url = `${API_BASE_URL}/stories/${id}`;

					fetch.mockResponse(JSON.stringify(story));
					const dispatch = jest.fn();

					return fetchStory(id)(dispatch).then(() => {
						expect(fetch).toHaveBeenCalledWith(url);
						expect(dispatch).toHaveBeenCalledWith(fetchStorySuccess(story));
					});
				});
			});

			describe('fetchStories', () => {
				it('Should dispatch fetchStoriesSuccess', () => {

					const stories = [];
					const url = `${API_BASE_URL}/stories`;

					fetch.mockResponse(JSON.stringify(stories));
					const dispatch = jest.fn();

					return fetchStories()(dispatch).then(() => {
						expect(fetch).toHaveBeenCalledWith(url);
						expect(dispatch).toHaveBeenCalledWith(fetchStoriesSuccess(stories));
					});

				});
			});
		});

		describe('Protected', () => {

			const token = 1234567890;

			beforeEach(() => {
				fetch.resetMocks();
			});

			afterEach(() => {
				localStorage.clear();
			});

			describe('submitNewStory', () => {
				it('Should dispatch fetchStorySuccess', () => {
					const story = {text:'Test', title:'Test'};
					const url = `${API_BASE_URL}/stories`;
					const request = {
						'body': JSON.stringify(story) ,
						'headers': {
							'Authorization': `Bearer ${token}`,
							'Content-Type': 'application/json'
						},
						'method': 'POST',
						'mode': 'cors'
					};

					localStorage.setItem('authToken', token);
					fetch.mockResponse(JSON.stringify(story));
					const dispatch = jest.fn();

					return submitNewStory(story)(dispatch).then(() => {
						expect(fetch).toHaveBeenCalledWith(url, request);
						expect(dispatch).toHaveBeenCalledWith(fetchStorySuccess(story));
					});
				});
			});

			describe('submitEditedStory', () => {
				it('Should dispatch fetchStorySuccess', () => {
					const story = {text:'Test', title:'Test', id:1};
					const url = `${API_BASE_URL}/stories/${story.id}`;
					const request = {
						'body': JSON.stringify(story) ,
						'headers': {
							'Authorization': `Bearer ${token}`,
							'Content-Type': 'application/json'
						},
						'method': 'PUT',
						'mode': 'cors'
					};

					localStorage.setItem('authToken', token);
					fetch.mockResponse(JSON.stringify(story));
					const dispatch = jest.fn();

					return submitEditedStory(story)(dispatch).then(() => {
						expect(fetch).toHaveBeenCalledWith(url, request);
						expect(dispatch).toHaveBeenCalledWith(fetchStorySuccess(story));
					});
				});
			});

			describe('deleteStory', () => {

			});
		});
	});
});