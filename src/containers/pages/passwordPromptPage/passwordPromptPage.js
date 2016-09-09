'use strict';

import React from 'react';
import { connect } from 'react-redux'
import zxcvbn from 'zxcvbn';
import PasswordInput from '../../../components/pieces/input/passwordInput/password_input'
import PasswordStrengthIndicator from '../../../components/pieces/input/passwordInput/password_strength_indicator'

class PasswordPromptPage extends React.Component {
    constructor(props) {
        super(props);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.state = {
            passwordObject: ""
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-8 col-md-push-2 center-block">
                        <PasswordInput onPasswordChange={this.handlePasswordChange}/>
                        <PasswordStrengthIndicator strength={this.state.passwordObject.score} />
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
    }
}

export default connect(mapStateToProps, {})(PasswordPromptPage);