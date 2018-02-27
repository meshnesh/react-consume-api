import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//components
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';


class UserLogin extends Component {
    render() {
        return(
            <div>
                <Navigation />
                <div className="row rowParent">
                    <form className="col s8 form">

                        {/* Email & Password form */}
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="email" type="email" className="validate"/>
                                <label for="email">Email</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="password" type="password" className="validate"/>
                                <label for="password">Password</label>
                            </div>
                        </div>
                        <a className="waves-effect waves-light btn">
                            Submit
                        </a>
                        <p>
                            Don't have an account: <Link to="/register"><a>Register</a></Link>
                        </p>
                    </form>
                </div>
                <Footer />
            </div>
        );
    }
}

export default UserLogin;