import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './components/Main';
import About from './components/About';
import UserRegistration from './components/Users/UserRegistration';
import UserLogin from './components/Users/UserLogin';
import EditEvent from './components/Events/EditEvent';


export default () => {
	return (
		<BrowserRouter>
			<Switch>
			  <Route exact path='/' component={App}/>
			  <Route exact path='/about' component={About}/>
			  <Route exact path='/register' component={UserRegistration}/>
			  <Route exact path='/login' component={UserLogin}/>
			  <Route exact path='/:id' component={EditEvent}/>
			</Switch>
		</BrowserRouter>
	)
}