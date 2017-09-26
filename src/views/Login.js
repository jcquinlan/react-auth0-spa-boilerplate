import React from 'react';
import { connect } from 'react-redux';

import Auth from '../auth';

const LoginView = (props) => {
    const login = () => {
        Auth.login();
    }

    return (
        <div>
            Login View
            <button onClick={login}>Login</button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
