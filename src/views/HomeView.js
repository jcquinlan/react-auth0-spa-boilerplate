import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomeView extends Component {
    render(){
        return (
            <div>
                Home
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
