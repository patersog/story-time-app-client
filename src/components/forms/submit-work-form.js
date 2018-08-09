import React from 'react';
import {connect} from 'react-redux';
import {reduxForm,Field,focus} from 'redux-form';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import Input from './redux-forms-input';
import {submitNewStory, submitEditedStory, setStory, editStory} from '../../actions/stories';
import {required, empty} from '../../validators';

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

	let error;
	if (props.error) {
		error = (
			<div className="form-field-error" aria-live="polite">
				{props.error}
			</div>
		);
	}
	return(
		<form
			className="submit-work-form"
			onSubmit={props.handleSubmit(values => onSubmit(values))}>
			<fieldset className="s-fieldset">
				<legend className="s-legend">Write Your Story</legend>
				<Field
					label="story title"
					className="s-title"
					component={Input}
					type="text"
					id="storyTitle"
					placeholder="Your Title"
					name="title"
					validate={[required, empty]}
				/>
				<label htmlFor="text" title={'story textarea'} className="submit-form-label">
					<Field
						className="s-text"
						placeholder="Your Story..."
						component="textarea"
						validate={[required, empty]}
						name="text"
						id="storyText"
						autoComplete="off"
						autoCorrect="off"
						autoCapitalize="off"
						spellCheck="true"
						role="textbox"
						aria-autocomplete="list"
						aria-haspopup="true"
					/>
				</label>
				<div className="button-holder">
					<button title={'submit work'} className="btn form" type="submit" disabled={props.pristine || props.submitting}>Submit Story</button>
				</div>
				{error}
			</fieldset>
		</form>
	);
}

SubmitWorkForm.propTypes = {
	editing: PropTypes.bool,
	dispatch: PropTypes.func,
	handleSubmit: PropTypes.func
};

let submitWorkForm = reduxForm({
	form:'submitwork',
	onSubmitFail: (errors, dispatch) => {
		dispatch(focus('storyTitle', 'storyText'));
	},
})(SubmitWorkForm);

submitWorkForm = connect(state => ({
	currentUser: state.auth.currentUser,
	editing: state.view.editing,
	initialValues: state.view.story ? state.view.story : {title:'', text: '', genre:''},
}))(submitWorkForm);

export default withRouter(submitWorkForm);