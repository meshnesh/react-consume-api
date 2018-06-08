/* global describe :true */
/* global it :true */
/* global expect afterEach beforeEach:true */
/* eslint no-undef: "error" */
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../../../actions/user.actions';
import * as types from '../../../../actions/actionTypes';
import { instance } from '../../../../_services/user.service';


describe('User Actions', ()=> {
	describe('User Registration action creator', ()=> {
		it('should return an event and action type', ()=> {
			const payload = { userInfo : 'some user information', testing : 'yes we are just testing'};
			const expectedAction = {
				type : types.REGISTER_SUCCESS,
				payload
			};
			expect(actions.registrationSuccess(payload)).toEqual(expectedAction);
		});
	});
    
	describe('LOGIN_SUCCESS action creator', ()=> {
		it('should return an action of type LOGIN_SUCCESS of the user ', ()=> {
			const payload = { userInfo : 'some user information', testing : 'yes we are just testing'};
			const expectedAction = {
				type : types.LOGIN_SUCCESS,
				payload 
			};
			expect(actions.loginSuccess(payload)).toEqual(expectedAction);
		});
	});

	describe('logOutSuccess action creator', ()=> {
		it('should return an action of type logOutSuccess ', ()=> {
			const payload = { userInfo : 'some user information', testing : 'yes we are just testing'};
			const expectedAction = {
				type : types.LOGOUT_SUCCESS,
				payload 
			};
			expect(actions.logOutSuccess(payload)).toEqual(expectedAction);
		});
	});
});