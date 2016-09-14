'use strict';

import React from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import zxcvbn from 'zxcvbn';
import PasswordInput from '../../../components/pieces/input/password_input/password_input'
import PasswordStrengthIndicator from '../../../components/pieces/input/password_input/password_strength_indicator'
import Store from '../../../store/configureStore'

class PasswordPromptPage extends React.Component {
    constructor(props) {
        super(props);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        if (!this.props.file) {
            browserHistory.push('/');
        }

        this.state = {
            passwordObject: ""
        };
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-8 col-md-push-2 center-block">
                        <PasswordInput onPasswordChange={this.handlePasswordChange}/>
                        <PasswordStrengthIndicator strength={this.state.passwordObject}/>
                    </div>
                </div>
            </div>
        );
    }

    handlePasswordChange(e) {
        var passwordObject = zxcvbn(e.target.value);
        this.setState({passwordObject: passwordObject});
    }

}

function mapStateToProps(state) {
    return {
        file: state.encrypt.file
    }
}

export default connect(mapStateToProps, {})(PasswordPromptPage);