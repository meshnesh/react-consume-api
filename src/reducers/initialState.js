export default {
	authLogin: {
		authenticated: false,
		isLoggedIn: false,
		error: false,
		message: '',
		token: null,
	},
	authRegister: {
		user: {},
		registered: false,
		registering: true,
	},
	events: [{
		events: [],
		message: {},
		categories: [],
		rsvp:{
			rsvp: false
		}
	}],
	ajaxCallInProgress: 0
};