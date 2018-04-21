import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// main routes
import AppRoutes from './routes';

//components
import MainComponent from './components/Main.js';
import store from './store.js'; 

ReactDOM.render(
	<Provider store={ store }>
		<AppRoutes />
	</Provider>
	,document.getElementById('main')
);
