import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';

import Input from './input';
import {searchStory} from '../actions/stories';

import './styles/search-bar.css';

export function Search(props){

	const onSubmit = (value) => {
		return props.dispatch(searchStory(value));
	};

	return(
		<form onSubmit={props.handleSubmit(value => onSubmit(value))}>
			<div className="search-bar">
				<Field type="search" name="searchText" id="searchtext" component={Input} palceholder="Search for Stories" autocomplete="off"/>
				<button type="submit" title="Submit your search query">Search</button>
			</div>
		</form>
	);
}

const mapStateToProps = state => ({
	searchText: state.view.searchText
});

//From reduxForm documentation https://redux-form.com/7.3.0/docs/faq/howtoconnect.md/
Search = connect(mapStateToProps)(Search);

export default reduxForm({
	form: 'search-text'
})(Search);