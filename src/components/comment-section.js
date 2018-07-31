import React from 'react';
import PropTypes from 'prop-types';

import CommentCard from './comment-card';

import './styles/comment-section.css';

export function CommentSection(props){
	const comments = [<CommentCard key={123123}/>];
	return(
		<div className="comments-section">
			<h5>This is the Comment Section!</h5>
			<ul className="comment-list">
				{comments}
			</ul>
		</div>
	);
}

export default CommentSection;