import {
	CLEAR_AUTH,
	AUTH_REQUEST,
	AUTH_SUCCESS,
	AUTH_ERROR,
	SET_DIALOG
} from '../actions/action-types';

const initialState = {
	currentUser: null,
	loading: false,
	error: null,
	dialog: false,
};

export default function reducer(state = initialState, action) {
	if (action.type === CLEAR_AUTH) {
		return { ...state,
			currentUser: null
		};
	} else if (action.type === AUTH_REQUEST) {
		return { ...state,
			loading: true,
			error: null
		};
	} else if (action.type === AUTH_SUCCESS) {
		return { ...state,
			loading: false,
			currentUser: action.currentUser
		};
	} else if (action.type === AUTH_ERROR) {
		return { ...state,
			loading: false,
			error: action.error
		};
	} else if (action.type === SET_DIALOG) {
		return { ...state,
			dialog: action.dialog
		};
	}
	return state;
}