import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './components/Main';
import About from './components/About';
import EditEvent from './components/Events/EditEvent';

export default () => {
	return (
		<BrowserRouter>
			<Switch>
			  <Route exact path='/' component={App}/>
			  <Route path='/about' component={About}/>
              <Route exact path='/:id' component={EditEvent}/>
			</Switch>
		</BrowserRouter>
	)
}