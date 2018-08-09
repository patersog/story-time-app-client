import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import {fetchStory, editStory, deleteStory, setStory} from '../../actions/stories';

import './styles/story-page.css';

export class StoryPage extends Component {

	componentDidMount() {
		if(JSON.stringify(this.props.story) === '{}') {
			this.props.dispatch(fetchStory(this.props.match.params.id));
		}
	}

	onClickEdit() {
		this.props.dispatch(editStory(true));
		this.props.history.push('/submit');
	}

	onClickRemove() {
		this.props.dispatch(deleteStory(this.props.story))
			.then(() => this.props.dispatch(setStory({})))
			.then(() => this.props.history.push('/'));
	}

	render() {

		if(this.props.isLoading) {
			return (
				<div className="story-view-container">
					<h2>Loading...</h2>
				</div>
			);
		}

		const edit = this.props.isOwner
			? <button title="edit" className="edit btn form" onClick={() => this.onClickEdit()}>edit</button>
			: undefined;

		const remove = this.props.isOwner
			? <button title="remove" className="remove btn form" onClick={() => this.onClickRemove()}>delete</button>
			: undefined;

		return(
			<section className="story sec">
				<article className="sec-container">
					<div className="info-container">
						<div className="story-title-author">
							<h3 className="story-title">{this.props.story.title}</h3>
							<h4 className="story-author">{`By: ${this.props.story.username}`}</h4>
							<div className="abs-button-holder">
								{edit}
								{remove}
							</div>
						</div>
					</div>
					<div className="story-container">
						<div className="inner">
							<div className="abs-scroll">
								<div className="story-text">
									<p>{this.props.story.text}</p>
								</div>
							</div>
						</div>
					</div>
				</article>
			</section>
		);
	}
}

const mapStateToProps = state => ({
	isLoggedIn: state.auth.currentUser !== null,
	isOwner: state.auth.currentUser !== null && state.auth.currentUser.username === state.view.story.username,
	isLoading: state.view.loading,
	story: state.view.story,
});

StoryPage.propTypes = {
	isLoading: PropTypes.bool,
	isLoggedIn: PropTypes.bool,
	isOwner: PropTypes.bool,
	story: PropTypes.shape({
		title: PropTypes.string,
		username: PropTypes.string,
		text: PropTypes.string
	}),
	dispatch: PropTypes.func,
	history: PropTypes.object,
	match: PropTypes.object
};

export default withRouter(connect(mapStateToProps)(StoryPage));
