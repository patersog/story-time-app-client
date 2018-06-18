import React from 'react';
// import {Field, reduxForm, focus} from 'redux-form';

import Input from './input';
import Form from './form';
// import {login} from '../actions/auth';
// import {required, nonEmpty} from '../validators';

import './styles/login-form.css';

export class LoginForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			isValidated: false
		};
	}

	submit(){
		// return this.props.dispatch(login(values.username, values.password));
		console.log(this);
		console.log(this.username, this.password);
	}

	render() {
		return(
			<Form
				className="login-form"
				onSubmit={this.submit}>
				<Input
					className="login-form-input"
					label="username"
					name="username"
					type="text"
					minLength={10}
					maxLength={72}
					pattern="(?=.*\d)(?=.*[a-z]).{2,}"
					id="login-username"
					onChange={value => (this.username = value)}
					required
				/>
				<Input
					className="login-form-input"
					label="password"
					name="password"
					type="password"
					minLength={10}
					maxLength={72}
					pattern="(?=.*\d)(?=.*[a-z]).{2,}"
					id="login-password"
					onChange={value => (this.password = value)}
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

// export default reduxForm({
// 	form: 'login',
// 	onSubmitFail: (errors, dispatch) => dispatch(focus('login', Object.keys(errors)[0]))
// })(LoginForm);