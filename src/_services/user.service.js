import axios from 'axios';

const instance = axios.create({
	baseURL:'https://bright-events.herokuapp.com',
	timeout:5000,
	headers:{ 
		Accept:'application/json',
		ContentType:'application/json'
	}
});

instance.interceptors.request.use((config)=>{
	const access_token = localStorage.getItem('access_token');
	config.headers.Authorization = `Bearer ${access_token}`;
	return config;
});

export default instance;