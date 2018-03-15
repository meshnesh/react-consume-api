import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//components
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

//actions
import { userLoginActions } from '../../actions/user.actions';


export class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {
                email: '',
                password: ''
             },
             submitted: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    handleChange(e) {
        const { userData } = this.state;
        userData[e.target.name] = e.target.value
        this.setState(userData)
    };

    handleSubmit(e) {
        e.preventDefault();
        const  user = this.state
        this.props.userLoginActions(user)
        this.setState({user: ""})
    };

    render() {
        const { login  } = this.props;
        const { userData, submitted } = this.state;

        return(
            <div>
                <Navigation />
                <div className="row rowParent">
                    <form className="col s8 form" onSubmit={this.handleSubmit}>

                        {/* Email & Password form */}
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="email" type="email" name="email" className="validate" value={ userData.email } onChange={this.handleChange}/>
                                <label for="email">Email</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="password" type="password" name="password" className="validate" value={ userData.password} onChange={this.handleChange}/>
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

const mapStateToProps = (state) => {
    return{
        userInfo:state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        userLoginActions: user =>dispatch(userLoginActions(user))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);