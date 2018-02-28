import React, { Component } from 'react';
import { connect } from 'react-redux';

//Components
import UserRegistration from './UserRegistration';


class User extends Component {


    render() {
        
        return(
            <div>
                <UserRegistration />
            </div>
        );
    }
}

export default User;