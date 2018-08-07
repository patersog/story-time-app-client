import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import ActionBar from './action-bar';
import StoryList from './story-list';
import StoryPage from './pages/story-page';

import './styles/list-action-display.css';

export function ListActionDisplay(props){

	if(props.story) {
		return (<StoryPage/>);
	}

	return(
		<section className="action-display">
			<h2 className="action-display-header">
					Browse The Short Stories
			</h2>
			<ActionBar/>
			<div className="action-display-main">
				<StoryList dispatch={props.dispatch}/>
			</div>
		</section>
	);
}

const mapStateToProps = state => ({
	story: JSON.stringify(state.view.story) !== '{}',
	isLoading: state.view.loading,
	stories: state.view.stories
});

ListActionDisplay.propTypes = {
	story: PropTypes.bool,
	isLoading: PropTypes.bool,
	stories: PropTypes.arrayOf(PropTypes.object),
	dispatch: PropTypes.func,
};

export default connect(mapStateToProps)(ListActionDisplay);