import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//components
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';


class UserRegistration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            // email: '',
            // password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("User registration", this.state);
    }

    render() {
        return(
            <div>
                <Navigation />
                <div className="row rowParent">
                    <form className="col s8 form" name="form" onSubmit={ this.handleSubmit }>

                        {/* Name form */}
                        <div className="row">
                            <div className="input-field col s12">
                            <input id="name" type="text" className="validate" value={ this.state.name } onChange={this.handleChange}/>
                            <label htmlFor="name">Full Names</label>
                            </div>
                        </div>

                        {/* Email & Password form */}
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="email" type="email" className="validate" value={ this.state.email } onChange={ this.handleChange }/>
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="password" type="password" className="validate" value={ this.state.password } onChange={ this.handleChange }/>
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <button className="waves-effect waves-light btn">
                            Submit
                        </button>
                        <p>
                            Already have an account: <Link to="/login">Login</Link>
                        </p>
                    </form>
                </div>
                <Footer />
            </div>
        );
    }
}

export default UserRegistration;