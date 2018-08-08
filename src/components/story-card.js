import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';

import {setStory} from '../actions/stories';

import './styles/story-card.css';

export function StoryCard (props) {

	const onReadClick = () => {
		props.dispatch(setStory(props.story));
		props.history.push(`/${props.story.id}`);
	};

	const {title, username, updated_at, created_at} = props.story;

	const updated = moment(updated_at).format('ddd MMM Do, YYYY');
	const created = moment(created_at).format('ddd MMM Do, YYYY');

	return(
		<li className="story-card">
			<div className="card-container">
				<div className="info">
					<h3 className="title">{title}</h3>
					<div className="description">
						<h4 className="author">{username}</h4>
						<h5 className="updated">{`written: ${updated}`}</h5>
					</div>
				</div>
			</div>
			<div className="readme-wrapper">
				<button className="readme" title={`read "${title}"`} aria-label={`read ${title}`} onClick={() => onReadClick()}><i className="fab fa-readme" role="presentation"></i></button>
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
		updated_at: PropTypes.string,
		id: PropTypes.number
	}),
	dispatch: PropTypes.func,
	history: PropTypes.object
};

export default withRouter(StoryCard);