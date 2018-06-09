
import {
	STORY_REQUEST,
	STORIES_SUCCESS,
	STORY_SUCCESS,
	STORY_ERROR,
	SET_STORY,
	ADD_STORY,
	UPDATE_STORY,
	EDIT_STORY,
	SEARCH_STORY,
} from '../actions/action-types';

const initialState = {
	stories: [],
	story: {},
	loading: false,
	error: null,
	dialog: false,
	editing: false,
	//searchText: '',
	//filters:{},
};

export default function reducer (state=initialState, action) {

	if(action.type === STORY_REQUEST){
		return {
			...state,
			loading: action.loading
		};
	}

	if(action.type === STORIES_SUCCESS){
		return {
			...state,
			stories: action.stories,
			loading: action.loading,
			error: null
		};
	}

	if(action.type === STORY_SUCCESS){
		return {
			...state,
			story: action.story,
			loading: action.loading,
			error: null
		};
	}

	if(action.type === STORY_ERROR){
		return {
			...state,
			story: {},
			loading: action.loading,
			error: action.error
		};
	}

	if(action.type === SET_STORY){
		return {
			...state,
			story: action.story
		};
	}

	if(action.type === ADD_STORY){
		return {
			...state,
			stories: [
				...state.stories,
				action.story
			],
			story: action.story,
		};
	}

	if(action.type === UPDATE_STORY){
		return {
			...state,
			stories: state.stories.map(story => {
				if(story.id === action.story.id) {
					return action.story;
				}
				return story;
			}),
			story: action.story,
		};
	}

	if(action.type === EDIT_STORY){
		return {
			...state,
			editing: action.editing
		};
	}

	if(action.type === SEARCH_STORY){
		return {
			...state,
			searchText: action.searchText
		};
	}

	return state;
}

