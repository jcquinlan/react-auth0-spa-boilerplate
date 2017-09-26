import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Auth from '../auth';

class LoadingView extends Component {
    render(){

        // Once the user is signed in, and we become aware of this via Redux,
        // transition them to home.
        if(Auth.isAuthenticated()) return <Redirect to={{ pathname: '/home' }} />

        // If the user data isn't logged in yet, keep them here.
        return (
            <div>
                Signing You In... Please Wait.
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadingView);
