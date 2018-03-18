import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


//components
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

import { userActions } from '../../actions/user.actions';


export class UserRegistration extends Component {
    constructor(props) {
        super(props);
        this.state = {
           userData: {
               name: '',
               email: '',
               password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e) {
        const { userData } = this.state;
        userData[e.target.name] = e.target.value
        this.setState(userData)
    }

    handleSubmit(e) {
        e.preventDefault();
        const  user = this.state
        this.props.userActions(user)
        this.setState({user: ""})
    };

   
    render() {
        const { registering  } = this.props;
        const { userData, submitted } = this.state;
        return(
            <div>
                <Navigation />
                <div className="row rowParent">
                    <form className="col s8 form" name="form" onSubmit={this.handleSubmit}>

                        {/* Name form */}
                        <div className="row">
                            <div className="input-field col s12">
                            <input id="name" type="text" name="name" className="validate" value={ userData.name } onChange={this.handleChange}/>
                            <label htmlFor="name">Full Names</label>
                            </div>
                        </div>

                        {/* Email & Password form */}
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="email" type="email" name="email" className="validate" value={ userData.email } onChange={ this.handleChange }/>
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="password" type="password" name="password" className="validate" value={ userData.password } onChange={ this.handleChange }/>
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
    return{
        userInfo:state.auth
    }
}

function mapDispatchToProps(dispatch){
    return{
        userActions: user =>dispatch(userActions(user))

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(UserRegistration);
