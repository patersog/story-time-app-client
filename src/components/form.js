import React from 'react';
import PropTypes from 'prop-types';
import {getValidateMessage} from '../validators';

export class Form extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isValidated: false
		};
	}

	//Form validate method implemented with the HTML5 validation API...
	validate() {

		const formEl = this.formEl;
		const formLength = formEl.length;

		if (formEl.checkValidity()===false) {
			for (let i = 0; i < formLength; i++) {

				const elem = formEl[i];
				const errorLabel = elem.parentNode.querySelector('.form-error-message');

				if (errorLabel && elem.nodeName.toLowerCase() !== 'button' && elem.nodeName.toLowerCase() !== 'fieldset' ) {
					if (!elem.validity.valid) {
						console.log(getValidateMessage(elem));
						errorLabel.textContent = elem.validationMessage;
					} else {
						errorLabel.textContent = '';
					}
				}
			}
			return false;
		}
		//The form is valid, so we clear all error messages
		for (let i = 0; i < formLength; i++) {
			const elem = formEl[i];
			const errorLabel = elem.parentNode.querySelector('.form-error-container');
			//console.log(errorLabel);
			if (errorLabel && elem.nodeName.toLowerCase() !== 'button' && elem.nodeName.toLowerCase() !== 'fieldset' ) {
				errorLabel.textContent = '';
			}
		}
		//Return 'true', as the form is valid for submission
		return true;

	}

	submitHandler(event){
		event.preventDefault();
		//If the call of the validate method was successful, we can proceed with form submission. Otherwise we do nothing.
		if (this.validate()) {
			this.props.onSubmit();
		}

		this.setState({ isValidated: true });
	}

	/**
	* Render the component as a regular form element with appended children from props.
	**/

	render() {
		// Add bootstrap's 'was-validated' class to the forms classes to support its styling
		// let classNames = [];
		// if (props.className) {
		// 	classNames = [...props.className];
		// 	delete props.className;
		// }

		// if (this.state.isValidated) {
		// 	classNames.push('was-validated');
		// }
		//The form will have a refference in the component and a submit handler set to the component's submitHandler

		return (
			<form {...this.props} ref={form => (this.formEl = form)} onSubmit={(e) => this.submitHandler(e)} noValidate>
				{this.props.children}
			</form>
		);
	}
}

Form.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	onSubmit: PropTypes.func.isRequired
};

export default Form;