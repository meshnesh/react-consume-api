import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


//components
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

import  userActions  from '../../actions';


class UserRegistration extends Component {
    constructor(props) {
        super(props);
        this.state = {
           user: {
               name: '',
               email: '',
               password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        if (user.name && user.email && user.password) {
            
            dispatch(userActions.register(user));
            console.log("user registratio",user)
        }
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return(
            <div>
                <Navigation />
                <div className="row rowParent">
                    <form className="col s8 form" name="form" onSubmit={this.handleSubmit}>

                        {/* Name form */}
                        <div className="row">
                            <div className="input-field col s12">
                            <input id="name" type="text" name="name" className="validate" value={ user.name } onChange={this.handleChange}/>
                            <label htmlFor="name">Full Names</label>
                            </div>
                        </div>

                        {/* Email & Password form */}
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="email" type="email" name="email" className="validate" value={ user.email } onChange={ this.handleChange }/>
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="password" type="password" name="password" className="validate" value={ user.password } onChange={ this.handleChange }/>
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

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}


export default connect(mapStateToProps)(UserRegistration);
