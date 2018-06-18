import React from 'react';
import SubmitWorkForm, {SubmitWorkForm as SWF} from '../submit-work-form';
import {shallow,mount} from 'enzyme';

import {reduxForm} from 'redux-form';
//import {createStore} from 'redux';
import {connect, Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import store from '../../store';

const defaultProps = {
	currentUser: 'test',
	editing: false,
	//These props are for reduxForm
	submitting: false,
	pristine: false,
	handleSubmit: () => {},
	initialValues: { text:'Text Test', title:'Title Test' },
};


describe('<SubmitWorkForm />', () => {
	//Smoke test
	it('Should render without crashing', () => {
		shallow(<SWF {...defaultProps} />);
	});

	it('Should render a <form/>', () => {
		const wrapper = shallow(<SWF {...defaultProps} />);
		expect(wrapper.hasClass('submit-work-form')).toEqual(true);
	});

	it('Should render a <button></button>', () => {
		const wrapper = shallow(<SWF {...defaultProps} />);
		//console.log(wrapper.debug());
		//expect(wrapper.hasClass('submit-btn')).toEqual(true); Why?
		expect(wrapper.find('button[type="submit"]')).toHaveLength(1);
	});

	it('Should render the correct fields', () => {
		const wrapper = shallow(<SWF {...defaultProps} />);
		expect(wrapper.find('[name="title"]')).toHaveLength(1);
		expect(wrapper.find('[name="text"]')).toHaveLength(1);
	});

	it('Should fire onSubmit callback with correct values when form is submitted', () => {
		/** Approach 1: create a store, wrap component with Provider, connect and reduxForm */
		const onSubmit = jest.fn();
		const values = {text: 'some text', title: 'some title'};
		// const store = createStore(() => ({}));
		const Decorated = connect()(reduxForm({form: 'testSubmitForm'})(SubmitWorkForm));
		const wrapper = mount(
			<Provider store={store}>
				<Router>
					{/* <Decorated initialValues={values} onSubmit={onSubmit}/> */}
					<Decorated />
				</Router>
			</Provider>
		).find('SubmitWorkForm').get(0);

		// wrapper.find('input[name="text"]').instance().value = values.text;
		// wrapper.find('input[name="title"]').instance().value = values.title;
		// wrapper.find('button[type="submit]').simulate('submit');
		console.log(wrapper);


		/** Approach 2 */
		// const onSubmit = jest.fn();

		// const values = {text: 'some text', title: 'some title'};
		// const wrapper = shallow(<SubmitWorkForm {...defaultProps} onSubmit={onSubmit} />);
		// wrapper.find('input[name="text"]').value = values.text;
		// wrapper.find('input[name="title"]').value = values.title;
		// wrapper.find('button[type="submit"]').dive().simulate('click');
		// expect(onSubmit).toHaveBeenCalledWith(values);
	});
});