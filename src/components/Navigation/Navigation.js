import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Nav extends Component {
	render() {
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
							<Link to="/register">
                                Register
							</Link>
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

export default Nav;