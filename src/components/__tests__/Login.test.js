// Login-test.js
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { UserLogin } from '../Users/UserLogin';

// describe what we are testing
describe('Login Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<UserLogin />)
    })
 
    // make our assertion and what we expect to happen 
    it('should render without throwing an error', () => {
      expect(wrapper.find('.col.s8.form').exists()).toBe(true);
    })
})
