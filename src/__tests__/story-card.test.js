import React from 'react';
import {StoryCard} from '../story-card';
import {shallow} from 'enzyme';

describe('<StoryCard />', () => {
	//Smoke test
	it( 'Should render without crashing', function() {
		const story = {
			title:'title',
			username:'username',
			updated_at: Date.now(),
			created_at: Date.now(),
			id: 0
		};
		shallow(<StoryCard story={story}/>);
	});
});