'use strict';

import React from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { MODE_ENCRYPT, MODE_DECRYPT } from '../utility/const'
import zxcvbn from 'zxcvbn';
import PasswordInput from './components/passwordInput'
import PasswordStrengthIndicator from './components/passwordStrengthIndicator'
import { passwordEntered } from './passwordPrompt.actions'


class PasswordPromptPage extends React.Component {
    constructor(props) {
        super(props);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
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
                <br />
                <div className="row">
                    <div className="col-md-8 col-md-push-2 center-block">
                        <PasswordInput onPasswordChange={this.handlePasswordChange}/>
                        <PasswordStrengthIndicator strength={this.state.passwordObject}/>
                        <button className="btn full-width" disabled={!this.state.passwordObject.password} onClick={this.handleClick}>
                            {this.props.mode === MODE_ENCRYPT ? "Share File" : "Retrieve File"}
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    handlePasswordChange(e) {
        var passwordObject = zxcvbn(e.target.value);
        this.setState({passwordObject: passwordObject});
    }

    handleClick(e) {
        this.props.passwordEntered(this.state.passwordObject);
        browserHistory.push('/processing');
    }

}

function mapStateToProps(state) {
    return {
        file: state.fileSelect.file,
        mode: state.fileSelect.mode
    }
}

//function mapDisplatchToProps()

export default connect(mapStateToProps, {
    passwordEntered
})(PasswordPromptPage);