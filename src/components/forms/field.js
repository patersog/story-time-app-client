import React from 'react';
import PropTypes from 'prop-types';

import './styles/form.css';

class Field extends React.Component {

	changeHandler(input) {
		const {name,value} = input;
		this.props.onChange({name: name, value: value});
	}

	render() {

		const {props} = this;

		const Element = props.element || 'input';
		const format = props.format || undefined;

		return (
			<fieldset className="form-field">
				<label
					htmlFor={props.name}
					className="form-label"
				>
					{props.label}
				</label>
				<Element
					{...props}
					className="form-input"
					name={props.name}
					id={props.id}
					placeholder={props.placeholder}
					type={props.type}
					ref={input => this.input = input}
					onChange={() => this.changeHandler(this.input)}
				/>
				<div className="format-text">{format}</div>
				<div className="form-error-container" aria-live="polite">
					<span className="form-error-message"></span>
				</div>
				{props.children}
			</fieldset>
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