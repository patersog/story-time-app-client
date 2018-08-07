import React from 'react';
import PropTypes from 'prop-types';

import './styles/form.css';

class Field extends React.Component {

	state = {
		tooltip: false
	};

	changeHandler(input) {
		const {name,value} = input;
		this.props.onChange({name: name, value: value});
	}

	toolTipClick() {

	}

	render() {

		const {props} = this;

		const Element = props.element || 'input';

		const tooltip = props.tooltip
			? (
				<div className="tooltip-wrapper">
					<button type="button" aria-label="tool tip" className="tooltip-button"><i className="fa fa-question-circle" aria-hidden="true"></i></button>
					<span className="tooltip-message">{props.tooltip}</span>
				</div>
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
						onChange={() => this.changeHandler(this.input)}
					/>
					{tooltip}
				</label>
				<div className="form-error-container" aria-live="polite">
					<span className="form-error-message"></span>
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
	id: PropTypes.string
};

export default Field;