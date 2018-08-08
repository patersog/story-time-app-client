import React from 'react';
import {connect} from 'react-redux';
import {reduxForm,Field} from 'redux-form';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import {submitNewStory, submitEditedStory, setStory, editStory} from '../../actions/stories';
import {required, empty} from '../../validators';

export function SubmitWorkForm(props){

	const onSubmit= values => {
		//genres not implemented on the back end yet.
		const {title, text} = values;

		if(props.editing) {
			const storyObj = {
				id : props.initialValues.id,
				title,
				text
			};
			props.dispatch(submitEditedStory(storyObj))
				.then( res => {
					const story = res.story;
					const updatedStory = Object.assign({},story,{'username':props.currentUser.username});
					props.dispatch(editStory(false));
					props.dispatch(setStory(updatedStory));
					props.history.push(`/${story.id}`);
				});

		} else {
			const storyObj = {title,text};
			props.dispatch(submitNewStory(storyObj))
				.then(res => {
					const story = res.story;
					const newStory = Object.assign({},story,{'username':props.currentUser.username});
					props.dispatch(setStory(newStory));
					props.history.push(`/${story.id}`);
				});
		}
	};
	return(
		<form
			className="submit-work-form"
			onSubmit={props.handleSubmit(values => onSubmit(values))}>
			<fieldset className="story-fldst">
				<legend>Submit Story</legend>
				<label htmlFor="title" className="submit-form-label">title</label >
				<Field
					className="submit-form-input"
					component="input"
					type="text"
					id="title"
					placeholder="Title Goes Here!"
					name="title"
					validate={[required, empty]}
				/>
				<label htmlFor="storytext" className="submit-form-label">story</label>
				<Field
					placeholder='Story Goes Here!'
					component="textarea"
					validate={[required, empty]}
					name="text"
					id="text"
					autoComplete="off"
					autoCorrect="off"
					autoCapitalize="off"
					spellCheck="true"
					rows="20"
					cols="10"
					role="textbox"
					aria-autocomplete="list"
					aria-haspopup="true"
				/>
				<div className="button-holder">
					<button title={'submit work'} className="submit-btn" type="submit" disabled={props.pristine || props.submitting}>Submit Story</button>
				</div>
			</fieldset>
		</form>
	);
}

SubmitWorkForm.propTypes = {
	editing: PropTypes.bool,
	dispatch: PropTypes.func
};

let submitWorkForm = reduxForm({
	form:'submitwork'
})(SubmitWorkForm);

submitWorkForm = connect(state => ({
	currentUser: state.auth.currentUser,
	editing: state.view.editing,
	initialValues: state.view.story ? state.view.story : {title:'', text: '', genre:''},
}))(submitWorkForm);

export default withRouter(submitWorkForm);