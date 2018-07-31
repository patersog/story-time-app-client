import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import StoryCard from './story-card';
import {fetchStories} from '../actions/stories';

import './styles/story-list.css';

export class StoryList extends Component {

	componentDidMount() {
		this.props.dispatch(fetchStories());
	}

	render() {
		if(this.props.isLoading) {
			return(
				<h2>Loading...</h2>
			);
		}
		const stories = this.props.stories.map((story, i) => {
			return <StoryCard dispatch={this.props.dispatch} key={i} story={story}/>;
		});

		return (
			<ul className="story-list">
				{stories}
			</ul>
		);
	}
}

const mapStateToProps = state => ({
	isLoading: state.view.loading,
	stories: state.view.stories
});

StoryList.propTypes = {
	isLoading: PropTypes.bool,
	stories: PropTypes.arrayOf(PropTypes.object),
	dispatch: PropTypes.func
};

export default connect(mapStateToProps)(StoryList);