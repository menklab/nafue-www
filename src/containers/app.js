import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { encryptFile } from '../actions'
import MainNavigation from '../components/parts/navigation/main-navigation'
class App extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <MainNavigation />
            </div>
        )
    }
}

App.propTypes = {
};

function mapStateToProps(state, ownProps) {
    return {
    }
}

export default connect(mapStateToProps, {
})(App)