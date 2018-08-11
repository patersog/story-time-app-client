import React from 'react';
import {CommentSection} from '../comment-section';
import {shallow} from 'enzyme';

describe('<CommentSection />', () => {
	//Smoke test
	it( 'Should render without crashing', function() {
		shallow(<CommentSection />);
	});
});