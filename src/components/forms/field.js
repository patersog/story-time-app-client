import React from 'react';
import PropTypes from 'prop-types';

import './styles/form.css';

class Field extends React.Component {

	/**
	 * TODO:
	 * Implement general field validation by function array
	 */
	changeHandler(input) {
		const {name,value} = input;
		this.props.onChange({name: name, value: value});
	}

	render() {

		const {props} = this;

		const Element = props.element || 'input';

		const tooltip = props.title
			? (
				<button type="button" aria-label="tool tip" className="tooltip-button"><i className="fa fa-question-circle" aria-hidden="true"></i></button>
			)
			:undefined;

		return (
			<div className="form-field">
				<label
					htmlFor={props.name}
					className="form-label"
				>
					{props.label}
					<Element
						className="form-element"
						{...props}
						name={props.name}
						id={props.id}
						placeholder={props.placeholder}
						type={props.type}
						ref={input => this.input = input}
						data-tooltip
						aria-haspopup="true"
						title={props.title}
						onChange={() => this.changeHandler(this.input)}
					/>
				</label>
				{tooltip}
				{tooltip?<span className="tooltip-message">{props.title}</span> : undefined}
				<div className="field-error-container" aria-live="polite">
					<span className="field-error-message"></span>
				</div>
				{props.children}
			</div>
		);
	}
}

Field.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	element: PropTypes.element,
	name: PropTypes.string,
	placeholder: PropTypes.string,
	type: PropTypes.string,
	label: PropTypes.string,
	id: PropTypes.string,
	validate: PropTypes.arrayOf(PropTypes.func)
};

export default Field;