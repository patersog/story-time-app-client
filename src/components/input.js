import React from 'react';
import PropTypes from 'prop-types';

import './styles/form-input.css';

export class Input extends React.Component {
	onChange(value) {
		this.props.onChange(value);
	}

	render() {

		const props = {...this.props};

		const Element = props.element || 'input';

		return (
			<fieldset>
				<label htmlFor={props.name}>
					{props.label}
				</label>
				<Element
					{...props}
					name={props.name}
					id={props.id}
					className={props.className}
					placeholder={props.placeholder}
					type={props.type}
					ref={input => this.input = input}
					onChange={() => this.onChange(this.input.value)}
				/>
				<div className="form-error-container" aria-live="polite">
					<span className="form-error-message"></span>
				</div>
				{this.props.children}
			</fieldset>
		);
	}
}

Input.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	onChange: PropTypes.func.isRequired
};

export default Input;