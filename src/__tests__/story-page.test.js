import React from 'react';
import {StoryPage} from '../story-page';
import {shallow} from 'enzyme';

describe('<StoryPage />', () => {
	//Smoke test
	it( 'Should render without crashing', function() {
		const dispatch = jest.fn();
		const story = {text: 'I am A story!'};
		const isLoading = false;
		shallow(<StoryPage dispatch={dispatch} story={story} />);
	});
});