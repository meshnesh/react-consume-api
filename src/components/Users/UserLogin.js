import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//components
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';


class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("User Login", this.state);
    }
    render() {
        return(
            <div>
                <Navigation />
                <div className="row rowParent">
                    <form className="col s8 form" onSubmit={this.handleSubmit}>

                        {/* Email & Password form */}
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="email" type="email" className="validate" value={this.state.email} onChange={this.handleChange}/>
                                <label for="email">Email</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="password" type="password" className="validate" value={this.state.password} onChange={this.handleChange}/>
                                <label for="password">Password</label>
                            </div>
                        </div>
                        <button className="waves-effect waves-light btn">
                            Submit
                        </button>
                        <p>
                            Don't have an account: <Link to="/register">Register</Link>
                        </p>
                    </form>
                </div>
                <Footer />
            </div>
        );
    }
}

export default UserLogin;