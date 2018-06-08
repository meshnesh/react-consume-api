// User-test.js, both Login and registration
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { UserLogin } from '../../Users/UserLogin';
import { UserRegistration } from '../../Users/UserRegistration';

// describe what we are testing
describe('Login Component', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<UserLogin />);
	});
 
	// make our assertion and what we expect to happen 
	it('should render without throwing an error', () => {
		expect(wrapper.find('.col.s8.form').exists()).toBe(true);
	});

	it('renders a email input', () => {
		expect(shallow(<UserLogin />).find('#email').length).toEqual(1);
	});

	it('renders a password input', () => {
		expect(shallow(<UserLogin />).find('#password').length).toEqual(1);
	});
});

describe('Email input', () => {
  
	it('should respond to change event and change the state of the Login Component', () => {

		const wrapper = shallow(<UserLogin />);
		wrapper.find('#email').simulate('change', {target: {name: 'email', value: 'blah@gmail.com'}});

		expect(wrapper.state('email')).toEqual('blah@gmail.com');
	});
});
   
describe('Password input', () => {

	it('should respond to change event and change the state of the Login Component', () => {
		const wrapper = shallow(<UserLogin />);
		wrapper.find('#password').simulate('change', {target: {name: 'password', value: 'cats'}});

		expect(wrapper.state('password')).toEqual('cats');
	});
});

// USER REGISTRATION TESTS
describe('Registration Component', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<UserRegistration />);
	});
 
	// make our assertion and what we expect to happen 
	it('should render without throwing an error', () => {
		expect(wrapper.find('.col.s8.form').exists()).toBe(true);
	});

	it('renders a name input', () => {
		expect(shallow(<UserRegistration />).find('#name').length).toEqual(1);
	});

	it('renders a email input', () => {
		expect(shallow(<UserRegistration />).find('#email').length).toEqual(1);
	});

	it('renders a password input', () => {
		expect(shallow(<UserRegistration />).find('#password').length).toEqual(1);
	});
});

describe('name input', () => {
  
	it('should respond to change event and change the state of the Registration Component', () => {

		const wrapper = shallow(<UserRegistration />);
		wrapper.find('#email').simulate('change', {target: {name: 'name', value: 'tonny'}});

		expect(wrapper.state('name')).toEqual('tonny');
	});
});

describe('Email input', () => {
  
	it('should respond to change event and change the state of the Registration Component', () => {

		const wrapper = shallow(<UserRegistration />);
		wrapper.find('#email').simulate('change', {target: {name: 'email', value: 'test@gmail.com'}});

		expect(wrapper.state('email')).toEqual('test@gmail.com');
	});
});
   
describe('Password input', () => {

	it('should respond to change event and change the state of the Registration Component', () => {
		const wrapper = shallow(<UserRegistration />);
		wrapper.find('#password').simulate('change', {target: {name: 'password', value: 'qwerty1234'}});

		expect(wrapper.state('password')).toEqual('qwerty1234');
	});
});
