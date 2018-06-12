import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import jwtDecode from 'jwt-decode';

import { loginSuccess } from './actions/user.actions';
// main routes
import AppRoutes from './routes';

//components
import MainComponent from './components/Main.js';
import store from './store.js'; 

// dispatch action that will hyrate from local storage

export const isTokenExpired = token => {
	const currentTime = new Date() / 1000;
	if(jwtDecode(token).exp < currentTime){
		localStorage.removeItem('access_token');
		return true;
	}
	return false;
};

function hydrateStore(){
	const access_token = localStorage.getItem('access_token');

	if(access_token && !isTokenExpired(access_token)) {
		store.dispatch(loginSuccess({token: access_token}));
	}

}

hydrateStore();
ReactDOM.render(
	<MuiThemeProvider>
		<Provider store={ store }>
			<AppRoutes />
		</Provider>
	</MuiThemeProvider>
	,document.getElementById('main')
);



