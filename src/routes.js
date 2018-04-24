import React from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import App from './components/Main';
import About from './components/About';
import UserRegistration from './components/Users/User';
import UserLogin from './components/Users/UserLogin';
import EventDetail from './components/Events/EventDetail';
import UserProfile from './components/Users/UserProfile';
import EditEvent from './components/AuthEvents/EditEvent';


export default () => {
	return (
		<HashRouter>
			<Switch>
				<Route exact path='/' component={App}/>
				<Route component={EditEvent} exact path='/edit/:id' />
				<Route exact path='/register' component={UserRegistration}/>
				<Route exact path='/profile' component={UserProfile}/>
				<Route exact path='/login' component={UserLogin}/>
				<Route exact path='/:id' component={EventDetail}/>
			</Switch>
		</HashRouter>
	);
};