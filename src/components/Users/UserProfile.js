import React, { Component } from 'react';

//components
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

class UserProfile extends Component {
    render() {
        return(
            <div>
                <Navigation />
                {/* <h1>User Profile</h1> */}
                <div className="collection">
                    <div className="collection-item">
                        <h4>Mango harvest</h4>
                        <span>18th April 2018 at 0900hrs</span> <span className="event-rsvp">0 RSVP</span>
                        <ul className="manage_tickets">
                            <li>
                                <a>
                                    <i className="fas fa-cogs"></i> Manage
                                </a>
                            </li>
                            <li>
                                <a>
                                    <i className="far fa-edit"></i> Edit
                                </a>
                            </li>
                            <li>
                                <a>
                                    <i className="fas fa-eye"></i> View
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="collection-item">
                        <h4>Mango harvest</h4>
                        <span>18th April 2018 at 0900hrs</span> <span className="event-rsvp">0 RSVP</span>
                        <ul className="manage_tickets">
                            <li>
                                <a>
                                    <i className="fas fa-cogs"></i> Manage
                                </a>
                            </li>
                            <li>
                                <a>
                                    <i className="far fa-edit"></i> Edit
                                </a>
                            </li>
                            <li>
                                <a>
                                    <i className="fas fa-eye"></i> View
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default UserProfile;