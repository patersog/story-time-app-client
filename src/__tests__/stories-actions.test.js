import {
	STORY_REQUEST,
	STORY_SUCCESS,
	STORIES_SUCCESS,
	STORY_ERROR,
	SET_STORY,
	EDIT_STORY,
	UPDATE_STORY,
	SET_AUTH_TOKEN,
} from '../action-types';

import {
	fetchStoryRequest,
	fetchStorySuccess,
	fetchStoriesSuccess,
	fetchStoryError,
	setStory,
	editStory,
	updateStory,
	fetchStories,
	fetchStory,
	submitNewStory,
	submitEditedStory,
} from '../stories';

import {
	login,
} from '../auth';

import {API_BASE_URL} from '../../config';

describe('Story Actions', () => {

	// describe('fetchStoryRequest', () => {
	// 	it('Should return the action STORY_REQUEST', () => {
	// 		const action = fetchStoryRequest();
	// 		expect(action.type).toEqual(STORY_REQUEST);
	// 		expect(action.loading).toEqual(true);
	// 	});
	// });

	// describe('fetchStorySuccess', () => {
	// 	it('Should return the action STORY_SUCCESS', () => {
	// 		const story = {};
	// 		const action = fetchStorySuccess(story);
	// 		expect(action.type).toEqual(STORY_SUCCESS);
	// 		expect(action.story).toEqual(story);
	// 		expect(action.loading).toEqual(false);
	// 	});
	// });

	// describe('fetchStoriesSuccess', () => {
	// 	it('Should return the action STORIES_SUCCESS', () => {
	// 		const stories = [];
	// 		const action = fetchStoriesSuccess(stories);
	// 		expect(action.type).toEqual(STORIES_SUCCESS);
	// 		expect(action.stories).toEqual(stories);
	// 		expect(action.loading).toEqual(false);
	// 	});
	// });

	// describe('fetchStoryError', () => {
	// 	it('Should return the action STORY_ERROR', () => {
	// 		const error = Error('ERROR!');
	// 		const action = fetchStoryError(error);
	// 		expect(action.type).toEqual(STORY_ERROR);
	// 		expect(action.error).toEqual(error);
	// 		expect(action.loading).toEqual(false);
	// 	});
	// });

	// describe('setStory', () => {
	// 	it('Should return the action SET_STORY', () => {
	// 		const story = {};
	// 		const action = setStory(story);
	// 		expect(action.type).toEqual(SET_STORY);
	// 		expect(action.story).toEqual(story);
	// 	});
	// });

	// describe('editStory', () => {
	// 	it('Should return the action EDIT_STORY', () => {
	// 		const action = editStory();
	// 		expect(action.type).toEqual(EDIT_STORY);
	// 	});
	// });

	// describe('updateStory', () => {
	// 	it('Should return the action UPDATE_STORY', () => {
	// 		const story = {};
	// 		const action = updateStory(story);
	// 		expect(action.type).toEqual(UPDATE_STORY);
	// 		expect(action.story).toEqual(story);
	// 	});
	// });

	// describe('fetchStory', () => {
	// 	it('Should dispatch fetchStorySuccess', () => {

	// 		const id = 1;
	// 		const story = {text:'I am Some Test Text'};

	// 		global.fetch = jest.fn().mockImplementation(() =>
	// 			Promise.resolve({
	// 				ok: true,
	// 				json() {
	// 					return story;
	// 				}
	// 			})
	// 		);

	// 		const dispatch = jest.fn();

	// 		return fetchStory(id)(dispatch).then(() => {
	// 			expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/stories/${id}`);
	// 			expect(dispatch).toHaveBeenCalledWith(fetchStorySuccess(story));
	// 		});
	// 	});
	// });

	// describe('fetchStories', () => {
	// 	it('Should dispatch fetchStoriesSuccess', () => {

	// 		const stories = [];

	// 		global.fetch = jest.fn().mockImplementation(() =>
	// 			Promise.resolve({
	// 				ok: true,
	// 				json() {
	// 					return stories;
	// 				}
	// 			})
	// 		);

	// 		const dispatch = jest.fn();
	// 		return fetchStories()(dispatch).then(() => {
	// 			expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/stories`);
	// 			expect(dispatch).toHaveBeenCalledWith(fetchStoriesSuccess(stories));
	// 		});

	// 	});
	// });

	describe('submitNewStory', () => {
		it('Should dispatch fetchStorySuccess', () => {
			const story = {text:'THIS IS A TEST!'};
			const user = {username: 'Amanda90', password:'password10'};

			global.fetch = jest.fn().mockImplementation(() =>
				Promise.resolve({
					ok: true,
					json() {
						return story;
					}
				})
			);

			const dispatch = jest.fn();
			//const getState = jest.fn();

			dispatch(login(user));
			// .then(() => {
			// 	return submitNewStory(story)(dispatch).then(() => {
			// 		expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/stories`);
			// 		expect(dispatch).toHaveBeenCalledWith(fetchStorySuccess(story));
			// 	});
			// });
		});
	});

	// describe('submitEditedStory', () => {
	// 	it('Should dispatch fetchStorySuccess', () => {
	// 		const id = 1;
	// 		const story = {};

	// 		global.fetch = jest.fn().mockImplementation(() =>
	// 			Promise.resolve({
	// 				ok: true,
	// 				json() {
	// 					return story;
	// 				}
	// 			})
	// 		);

	// 		const dispatch = jest.fn();
	// 		const getState = jest.fn();
	// 		return submitEditedStory(story)(dispatch).then(() => {
	// 			expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/stories/${id}`);
	// 			expect(dispatch).toHaveBeenCalledWith(fetchStorySuccess(story));
	// 		});
	// 	});
	// });
});