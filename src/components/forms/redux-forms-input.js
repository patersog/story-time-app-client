import React from 'react';

import './styles/rf-input.css';

export default class Input extends React.Component {
	componentDidUpdate(prevProps) {
		if (!prevProps.meta.active && this.props.meta.active) {
			this.input.focus();
		}
	}

	render() {
		let error;
		if (this.props.meta.touched && this.props.meta.error) {
			error = <div className="rf-form-error">{this.props.meta.error}</div>;
		}

		let warning;
		if (this.props.meta.touched && this.props.meta.warning) {
			warning = (
				<div className="rf-form-warning">{this.props.meta.warning}</div>
			);
		}

		return (
			<div className="rf-form-input title-input">
				<label htmlFor={this.props.input.name} aria-label={this.props.label}>
					{error}
					{warning}
				</label>
				<input
					{...this.props.input}
					id={this.props.input.name}
					type={this.props.type}
					placeholder={this.props.placeholder}
					ref={input => (this.input = input)}
				/>
			</div>
		);
	}
}