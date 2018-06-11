import React from 'react';
import {connect} from 'react-redux';

import ErrorDisplay from './error-display';
import ListActionDisplay from './list-action-display';

import './styles/home.css';

export function Home(props){
	const component = !props.error ? <ListActionDisplay/> : <ErrorDisplay error={props.error}/>;
	return (
		<main className="main">
			{component}
		</main>
	);
}

const mapStateToProps = state => ({
	error: state.view.error
});

export default connect(mapStateToProps)(Home);