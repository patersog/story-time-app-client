import React from 'react';

import Field from './field';
import Form from './form';

import './styles/login-form.css';

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
			>
				<Field
					label="username"
					name="username"
					type="text"
					minLength={10}
					maxLength={72}
					pattern="(?=.*\d)(?=.*[a-z]).{2,}"
					onChange={dataObj => this.changeHandler(dataObj)}
					required
				/>
				<Field
					label="password"
					name="password"
					type="password"
					minLength={8}
					maxLength={72}
					pattern="(?=.*\d)(?=.*[a-z]).{2,}"
					onChange={dataObj => this.changeHandler(dataObj)}
					required
				/>
				<div className="login-button-holder">
					<button className="btn login" type="submit">log in</button>
				</div>
			</Form>
		);
	}
}

export default LoginForm;
