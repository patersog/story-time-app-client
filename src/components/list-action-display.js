import React from 'react';
import {connect} from 'react-redux';

import ActionBar from './action-bar';
import StoryList from './story-list';
import StoryPage from './story-page';

import './styles/list-action-display.css';

export function ListActionDisplay(props){

	if(props.story) {
		return (<StoryPage/>);
	}

	return(
		<div className="action-display">
			<h2 className="action-display-header">
					Browse The Short Stories
			</h2>
			<ActionBar/>
			<div className="action-display-main">
				<StoryList/>
			</div>
		</div>
	);
}

const mapStateToProps = state => ({
	story: JSON.stringify(state.view.story) !== '{}'
});

export default connect(mapStateToProps)(ListActionDisplay);