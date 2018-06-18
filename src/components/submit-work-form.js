import React from 'react';
import {connect} from 'react-redux';
import {reduxForm,Field} from 'redux-form';
import {withRouter} from 'react-router-dom';

import {submitNewStory, submitEditedStory, setStory, editStory} from '../actions/stories';
import {required, nonEmpty} from '../validators';

import './styles/submit-work-form.css';

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
			<fieldset className="title-fldst">
				<label htmlFor="title" className="submit-form-label">title</label >
				<Field
					className="submit-form-input"
					component="input"
					type="text"
					id="title"
					placeholder="Title Goes Here!"
					name="title"
					validate={[required, nonEmpty]}
				/>
			</fieldset>
			{/* <fieldset className="genre-fldst">
					<label htmlFor="genre">genre</label>
					<Field
						name="genre"
						id="genre"
						component="select"
						validate={[required, nonEmpty]}
					>
						<option>SELECT YOUR GENRE</option>
						<option value="horror">horror</option>
						<option value="comedy">comedy</option>
						<option value="sci-fi">sci-fi</option>
						<option value="mystery">mystery</option>
						<option value="fantasy">fantasy</option>
					</Field>
				</fieldset> */}
			<fieldset className="text-fldst">
				<label htmlFor="storytext" className="submit-form-label">story</label>
				<Field
					placeholder='Story Goes Here!'
					component="textarea"
					validate={[required, nonEmpty]}
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
			</fieldset>
			<div className="button-holder">
				<button className="submit-btn" type="submit" disabled={props.pristine || props.submitting}>Submit Story</button>
			</div>
		</form>
	);
}

let submitWorkForm = reduxForm({
	form:'submitwork'
})(SubmitWorkForm);

submitWorkForm = connect(state => ({
	currentUser: state.auth.currentUser,
	editing: state.view.editing,
	initialValues: state.view.story ? state.view.story : {title:'', text: '', genre:''},
}))(submitWorkForm);

export default withRouter(submitWorkForm);