import React from 'react';
import {connect} from 'react-redux';

import Field from './field';
import Form from './form';

import {login} from '../../actions/auth';

export class LoginForm extends React.Component {

	state = {
	}

	submit = () => {
		console.log(this.state);
	}

	changeHandler = (dataObj) => {
		const{name, value} = dataObj;
		let field = {};
		field[name] = value;
		this.setState((prevState) => {
			return Object.assign(prevState, field);
		});
	}

	render() {
		return(
			<Form
				onSubmit={this.submit}
				{...this.props}
			>
				<Field
					label="username"
					name="username"
					type="text"
					minLength={10}
					maxLength={72}
					pattern="^([a-zA-Z0-9].{8,72})$"
					onChange={dataObj => this.changeHandler(dataObj)}
					tooltip={'Must contain only letters and numbers, between 8 and 72 characters in length'}
					required
				/>
				<Field
					label="password"
					name="password"
					type="password"
					minLength={8}
					maxLength={72}
					pattern="^([a-zA-Z0-9].{8,72})$"
					onChange={dataObj => this.changeHandler(dataObj)}
					tooltip={'Must contain only letters and numbers, between 8 and 72 characters in length'}
					required
				/>
				<div className="login-button-holder">
					<button className="btn login" type="submit">log in</button>
				</div>
			</Form>
		);
	}
}

export default connect()(LoginForm);
