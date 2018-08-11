import React from 'react';
import {shallow,mount} from 'enzyme';

import {StoryList} from '../story-list';
import StoryCard from '../story-card';
import { fetchStories } from '../../actions/stories';


jest.mock('../../actions/stories', () =>
	Object.assign({}, require.requireActual('../../actions/stories'), {
		fetchStories: jest.fn().mockImplementation(() => {
			return {
				type: 'FETCH_STORIES',
			};
		})
	})
);

describe('<StoryList />', () => {

	//Smoke test
	it('Should render without crashing', function() {
		const dispatch = jest.fn();
		shallow(<StoryList stories={[]} dispatch={dispatch} />);
	});

	it('Should render loading', function() {
		const dispatch = jest.fn();
		const wrapper = shallow(<StoryList isLoading={true} stories={[]} dispatch={dispatch} />);
		expect(wrapper.contains(<h2>Loading...</h2>)).toBe(true);
	});

	it('Dispatches fetchStories from constructor', () => {
		const dispatch = jest.fn();
		const wrapper = mount(<StoryList stories={[]} dispatch={dispatch} />);
		// Ignore any previous calls to dispatch
		expect(dispatch).toHaveBeenCalledWith(fetchStories({
			type: 'FETCH_STORIES'
		}));
	});

});