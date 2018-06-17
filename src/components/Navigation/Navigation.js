import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogoutActions, userLoginActions } from '../../actions/user.actions';

import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import ViewModule from 'material-ui/svg-icons/action/view-module';
import {white} from 'material-ui/styles/colors';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class Nav extends Component {

	constructor(props) {
		super(props);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.state = {
			isLoggedIn: this.props.userInfo.isLoggedIn
		};
	}


	handleLogoutClick() {
		this.setState({isLoggedIn: false});
		this.props.userLogoutActions();
	}

	render() {

		const isLoggedIn = this.state.isLoggedIn;

		const button = isLoggedIn ? (
			<div>
				<Link to="/newProfile">
					<MenuItem key={1} primaryText="Profile"/>
				</Link>

				<MenuItem primaryText="Sign out" onClick={this.handleLogoutClick} />
			</div>
		) : (
			<Link to="/Login">
				<MenuItem key={1} primaryText="Login"/>
			</Link>
		);

		return (
			<nav>
				<div className="nav-wrapper">
					<Link className="brand-logo" to="/">
                        Bright Events
					</Link>
                    
					<ul id="nav-mobile hide-on-small-only" className="right hide-on-med-and-down">

						<IconMenu color={white}
							iconButtonElement={
								<IconButton><MoreVertIcon color={white}/></IconButton>
							}
							targetOrigin={{horizontal: 'right', vertical: 'top'}}
							anchorOrigin={{horizontal: 'right', vertical: 'top'}}
						>
							{ button }
						</IconMenu>
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
