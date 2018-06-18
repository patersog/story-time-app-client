import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {setStory} from '../actions/stories';

import './styles/navigation-bar.css';

export function NavigationBar(props) {

	return(
		<nav>
			<ul>
				<li className="link">
					<Link className="btn" onClick={() => props.dispatch(setStory({}))} to="/">home</Link>
				</li>
				<li className="link">
					<Link className="btn" onClick={() => props.dispatch(setStory({}))} to="/about">about</Link>
				</li>
				<li className="link">
					<Link className="btn" onClick={() => props.dispatch(setStory({}))} to="/register">sign up</Link>
				</li>
			</ul>
		</nav>
	);
}

export default connect()(NavigationBar);