import React from 'react';
import {CommentCard} from '../comment-card';
import {shallow} from 'enzyme';

describe('<CommentCard />', () => {
	//Smoke test
	it( 'Should render without crashing', function() {
		shallow(<CommentCard />);
	});
});