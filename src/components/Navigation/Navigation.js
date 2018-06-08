import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { LoginButton, LogoutButton } from './LoginButton';
import { userLogoutActions, userLoginActions } from '../../actions/user.actions';


class Nav extends Component {

	constructor(props) {
		super(props);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.state = {isLoggedIn: this.props.userInfo.isLoggedIn};
	}

	
	handleLogoutClick() {
		this.setState({isLoggedIn: false});
		this.props.userLogoutActions();
	}

	render() {
		const isLoggedIn = this.state.isLoggedIn;
    
		const button = isLoggedIn ? (
			<LogoutButton onClick={this.handleLogoutClick} />
		) : (
			<LoginButton>
				<Link to="/register">
					Register
				</Link>
			</LoginButton>
		);

		return (
			<nav>
				<div className="nav-wrapper">

					<Link className="brand-logo" to="/">
                        Bright Events
					</Link>
                    
					<ul id="nav-mobile hide-on-small-only" className="right hide-on-med-and-down">
						<li>
							{button}
						</li>
						<li>
							<Link to="/profile">
                                Manage Events
							</Link>
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