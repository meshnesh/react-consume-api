const userService = { 
	register(user) {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(user)
		};

		return fetch(
			'https://bright-events.herokuapp.com/api/auth/register',
			requestOptions).then(handleResponse
		);
	}
};