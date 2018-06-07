/* global describe :true */
/* global it :true */
/* global expect afterEach beforeEach:true */
/* eslint no-undef: "error" */
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../../../actions/authEvents.actions';
import * as types from '../../../../actions/actionTypes';
import { instance } from '../../../../_services/user.service';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Events Actions', ()=> {
	describe('Event created action creator', ()=> {
		it('should return an event and action type', ()=> {
			const payload = { eventInfo : 'some event information', testing : 'yes we are just testing'};
			const expectedAction = {
				type : types.ADD_EVENT_SUCCESS,
				payload
			};
			expect(actions.createEventSuccess(payload)).toEqual(expectedAction);
		});
	});
    
	describe('ALL_EVENTS_FETCHED action creator', ()=> {
		it('should return an action of type ALL_EVENTS_FETCHED and an array of events ', ()=> {
			const payload = { eventInfo : 'some event information', testing : 'yes we are just testing'};
			const expectedAction = {
				type : types.GET_AUTH_EVENT_SUCCESS,
				payload 
			};
			expect(actions.getEventSuccess(payload)).toEqual(expectedAction);
		});
	});

	describe('EDIT_EVENT_SUCCESS action creator', ()=> {
		it('should return an action of type EDIT_EVENT_SUCCESS ', ()=> {
			const payload = { eventInfo : 'some event information', testing : 'yes we are just testing'};
			const expectedAction = {
				type : types.EDIT_EVENT_SUCCESS,
				payload 
			};
			expect(actions.editEventSuccess(payload)).toEqual(expectedAction);
		});
	});
    
	describe('SUCCESSFUL_RSVP action creator', ()=> {
		it('should return an action of type SUCCESSFUL_RSVP ', ()=> {
			const payload = { eventInfo : 'some event information', testing : 'yes we are just testing'};
			const expectedAction = {
				type : types.SUCCESSFUL_RSVP,
				payload 
			};
			expect(actions.rsvpEventSuccess(payload)).toEqual(expectedAction);
		});
	});
});