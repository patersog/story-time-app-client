import React from 'react';
import PropTypes from 'prop-types';

export class Form extends React.Component {

	state = {
		isValidated: false,
		fields: []
	};

	mapFieldsToState = (children) => {
		return children.map(child => child.type.name ==='Field' ? {name: child.props.name, onChange: child.props.onChange} : undefined)
			.filter(el => el !== undefined);
	}

	componentDidMount() {
		this.setState((prevState, props) => ({
			fields: this.mapFieldsToState(props.children)
		}));
	}

	//Form validate method implemented with the HTML5 validation API...
	validate = () => {

		const formEl = this.formEl;
		const formLength = formEl.length;

		if (formEl.checkValidity()===false) {
			for (let i = 0; i < formLength; i++) {
				const elem = formEl[i];
				if (elem.nodeName.toLowerCase() !== 'button' && elem.nodeName.toLowerCase() !== 'fieldset' ) {
					const errorMessage = elem.parentNode.parentNode.querySelector('.form-error-message');
					if (!elem.validity.valid) {
						errorMessage.textContent = elem.validationMessage;
					} else {
						errorMessage.textContent = '';
					}
				}
			}
			return false;
		}

		for (let i = 0; i < formLength; i++) {
			const elem = formEl[i];
			if (elem.nodeName.toLowerCase() !== 'button' && elem.nodeName.toLowerCase() !== 'fieldset' ) {
				const errorMessage = elem.parentNode.parentNode.querySelector('.form-error-message');
				errorMessage.textContent = '';
			}
		}
		return true;
	}

	submitHandler = (event) => {
		event.preventDefault();
		if (this.validate()) {
			this.props.onSubmit();
		}
		this.setState({ isValidated: true });
	}

	render() {
		const title = this.props.title ? this.props.title : undefined;
		return (
			<form
				ref={form => (this.formEl = form)}
				onSubmit={(e) => this.submitHandler(e)}
				noValidate
			>
				<fieldset className="form-fieldset">
					<legend className="form-legend">{title}</legend>
					{this.props.children}
				</fieldset>
			</form>
		);
	}
}

Form.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	onSubmit: PropTypes.func.isRequired,
	title: PropTypes.string
};

export default Form;