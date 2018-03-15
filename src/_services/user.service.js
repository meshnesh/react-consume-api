import axios from 'axios';
import store from '../store';

const instance = axios.create({
	baseURL:'https://bright-events.herokuapp.com',
	timeout:5000,
	headers:{ 
		Accept:'application/json',
		ContentType:'application/json'
	}
});

instance.interceptors.request.use(function(config){
	const{ access_token } = store.getState().auth;
	if ( access_token ){
		config.headers.Authorization = 'Bearer ' + access_token;
	}
	config.headers['Access-Control-Allow-Origin'] = '*';
	return config;
});

export default instance;