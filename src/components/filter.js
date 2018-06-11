import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';

import './styles/control-panel.css';

export function Filter(props){

	const onSubmit = (value) => {
		console.log(value);
	};

	return(
		<form onSubmit={this.props.handleSubmit(value => onSubmit(value))}
			className="filter-container">
			<fieldset className="genre-fldst">
				<label htmlFor="genre">genre</label>
				<Field name="genre" id="genre" component="select">
					<option></option>
					<option value="horror">horror</option>
					<option value="comedy">comedy</option>
					<option value="sci-fi">sci-fi</option>
					<option value="mystery">mystery</option>
					<option value="fantasy">fantasy</option>
				</Field>
			</fieldset>
		</form>
	);
}

const mapStateToProps = state => ({
	filter: state.view.filters
});

let filter = connect(mapStateToProps)(Filter);

export default reduxForm({
	form: 'filter'
})(filter);