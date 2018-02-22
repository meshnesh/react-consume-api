import React, { Component } from 'react';


class Nav extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="index.html" className="brand-logo">Bright Events</a>
                    <ul id="nav-mobile hide-on-small-only" className="right hide-on-med-and-down">
                        <li><a href="#"></a></li>
                        <li><a href="signup.html">Sign In</a></li>
                        <li><a href="manageTickets.html">Manage Events</a></li>
                    </ul>
                    </div>
            </nav>
        );
    } 
}

export default Nav;