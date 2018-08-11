import React from 'react';
import {SubmitWorkPage} from '../submit-work-page';
import {shallow} from 'enzyme';

describe('<SubmitWorkPage />', () => {
	//Smoke test
	it( 'Should render without crashing', function() {
		shallow(<SubmitWorkPage />);
	});
});