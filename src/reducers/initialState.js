export default {
	authLogin: {
		authenticated: false,
		loading: false,
		login: true,
		error: false,
		message: '',
		token: null,
	},
	authRegister: {
		user: {},
		registered: false,
		registering: true,
	},
	events: [{events: []}],
	ajaxCallInProgress: 0
};