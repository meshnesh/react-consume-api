// Events.test.js, both Login and registration
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Events from '../../Events/EventItem';
import Search from '../../Search/Search';
import Footer from '../../Footer/Footer';
import Modal from '../../Modal';


// describe what we are testing
describe('Events Component', () => {
    
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Events />);
	});
 
	// make our assertion and what we expect to happen 
	it('should render without throwing an error', () => {
		expect(wrapper.find('.col.s12.m4').exists()).toBe(true);
	});
    
});

// describe what we are testing
describe('Search Component', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Search />);
	});
 
	// make our assertion and what we expect to happen 
	it('should render without throwing an error', () => {
		expect(wrapper.find('.row .search').exists()).toBe(true);
	});
    
});

// describe what we are testing
describe('Footer Component', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Footer />);
	});
 
	// make our assertion and what we expect to happen 
	it('should render without throwing an error', () => {
		expect(wrapper.find('.page-footer').exists()).toBe(true);
		expect(wrapper.find('.container.center').exists()).toBe(true);
	});
    
});

// describe what we are testing
describe('Modal Component', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Modal />);
	});
 
	// make our assertion and what we expect to happen 
	it('should render without throwing an error', () => {
		expect(wrapper.find('.btn .modal-trigger').exists()).toBe(true);
	});
    
});

