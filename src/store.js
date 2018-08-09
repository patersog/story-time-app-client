import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth';
import storiesReducer from './reducers/stories';
import {storeAuthInfo} from './actions/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	combineReducers({
		form: formReducer,
		auth: authReducer,
		view: storiesReducer,
	}),
	composeEnhancers(
		applyMiddleware(thunk),
	)
);

const authToken = localStorage.getItem('authToken');
if (authToken) {
	const token = authToken;
	storeAuthInfo(token, store.dispatch);
}

export default store;