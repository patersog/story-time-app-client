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

	const date = updated_at === created_at
		? <h5 className="date">{`${moment(created_at).format('ddd MMM Do, YYYY')}`}</h5>
		: <h5 className="date">{`${moment(updated_at).format('ddd MMM Do, YYYY')}`}</h5>;

	return(
		<li className="story-card">
			<div className="card-container">
				<div className="card-info">
					<h3 className="card-title">{title}</h3>
					<div className="card-description">
						<h4 className="author">{`${username}`}</h4>
						{date}
					</div>
				</div>
			</div>
			<div className="readme-wrapper">
				<button className="readme" title={`read "${title}"`} aria-label={`read ${title}`}><i onClick={() => onReadClick()} className="fab fa-readme" role="presentation"></i></button>
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