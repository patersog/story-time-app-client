import React from 'react';
import {ControlPanel} from '../control-panel';
import {shallow} from 'enzyme';

describe('<ControlPanel />', () => {
	//Smoke test
	it( 'Should render without crashing', function() {
		shallow(<ControlPanel />);
	});
});