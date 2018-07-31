import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';

import {setStory} from '../actions/stories';

import './styles/story-card.css';

export function StoryCard (props) {

	const onClick = (story) => {
		props.dispatch(setStory(story));
		props.history.push(`/${story.id}`);
	};

	const {story} = props;
	const {title, username, updated_at, created_at} = story;

	const updated = moment(updated_at).format('ddd MMM Do, YYYY');
	const created = moment(created_at).format('ddd MMM Do, YYYY');

	return(
		<li className="story-card" onClick={() => onClick(story) }>
			<div className="info">
				<div className="title-author">
					<h3 className="card-title">{title}</h3>
					<h4 className="card-author">{username}</h4>
				</div>
				<div className="date">
					<h5 className="card-created">{`written: ${created}`}</h5>
					<h5 className="card-updated">{`edited: ${updated}`}</h5>
				</div>
				<button onClick={() => onClick(story)}><i className="fab fa-readme"></i></button>
			</div>
		</li>
	);
}

StoryCard.propTypes = {
	story: PropTypes.shape({
		title: PropTypes.string,
		username: PropTypes.string,
		text: PropTypes.string,
		created_at: PropTypes.string,
		updated_at: PropTypes.string
	})
};

export default withRouter(StoryCard);