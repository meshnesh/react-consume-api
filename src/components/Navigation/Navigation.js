import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { LoginButton, LogoutButton } from './LoginButton';
import { userLogoutActions } from '../../actions/user.actions';


class Nav extends Component {

	constructor(props) {
		super(props);
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.logOutUser=this.logOutUser.bind(this);
		this.state = {isLoggedIn: false};
	}
	
	handleLoginClick() {
		this.setState({isLoggedIn: true});
		console.log('this state is logged in', this.state);
	}
	
	handleLogoutClick() {
		this.setState({isLoggedIn: false});
		console.log('this state is logged out', this.state);
	}

	logOutUser(e) {
		e.preventDefault();
		this.props.userLogoutActions();
		console.log('Logged out function');
	}

	render() {
		const isLoggedIn = this.state.isLoggedIn;
    
		const button = isLoggedIn ? (
			<LogoutButton onClick={this.handleLogoutClick} />
		) : (
			<LoginButton onClick={this.handleLoginClick} />
		);

		console.log('this state log is', this.state);

		return (
			<nav>
				<div className="nav-wrapper">

					<Link className="brand-logo" to="/">
                        Bright Events
					</Link>
                    
					<ul id="nav-mobile hide-on-small-only" className="right hide-on-med-and-down">
						<li>
							<Link to="/category">
                                Categories
							</Link>
						</li>
						<li>
							<Link to="/about">
                                About
							</Link>
						</li>
						<li>
							{/* {button} */}
							<Link to="/register">
                                Register
							</Link>
						</li>
						<li>
							<Link to="/profile">
                                Manage Events
							</Link>
						</li>
						<li>
							<a href="#" onClick={this.logOutUser}>
                                Log out
							</a>
						</li>
						
					</ul>
				</div>
			</nav>
		);
	} 
}

const mapStateToProps = state => {
	return{
		userInfo:state.authLogin
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		userLogoutActions: () =>dispatch(userLogoutActions())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);