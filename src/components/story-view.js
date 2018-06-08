import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

//import CommentSection from './comment-section';
import {fetchStory, editStory} from '../actions/stories';

import './styles/story-view.css';

export class StoryView extends Component {

	componentDidMount() {
		if(JSON.stringify(this.props.story) === '{}') {
			this.props.dispatch(fetchStory(this.props.match.params.id));
		}
	}

	onClickEdit() {
		this.props.dispatch(editStory(true));
		this.props.history.push('/submit');
	}

	render() {

		if(this.props.isLoading) {
			return (
				<div className="story-view-container">
					<h2>Loading...</h2>
				</div>
			);
		}

		const edit = this.props.isOwner ? <button className="edit-btn" onClick={() => this.onClickEdit()}>Edit</button> : undefined;

		return(
			<div className="story-view-container">
				<div className="story-container">
					<div className="info-container">
						<div className="story-title-author">
							<h3 className="story-title">{this.props.story.title}</h3>
							<h4 className="story-author">{`By: ${this.props.story.username}`}</h4>
							{edit}
						</div>
					</div>
					<div className="story-text">
						<p>{this.props.story.text}</p>
					</div>
					{/*<CommentSection/>*/}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	isloggedIn: state.auth.currentUser !== null,
	isOwner: state.auth.currentUser !== null && state.auth.currentUser.username === state.view.story.username,
	isLoading: state.view.loading,
	story: state.view.story,
});

export default withRouter(connect(mapStateToProps)(StoryView));
