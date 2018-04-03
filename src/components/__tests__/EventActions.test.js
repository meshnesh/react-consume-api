// Events.test.js, both Login and registration
import React from 'react';
import { shallow, mount, render } from 'enzyme';
// import Events from '../Events/EventItem';

import * as Actions from '../../reducers/eventsReducer';


describe('event Actions', () => {
    it('should return the initial state', () => {
      expect(Actions(undefined, {})).toEqual([
        {
                events:[],
                fetching: false,
                fetched: false,
                error: null
        }
      ])
    })
})