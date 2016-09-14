'use strict';

import React from 'react';
import zxcvbn from 'zxcvbn';
import AnimateOnChange from 'react-animate-on-change'

class PasswordStrengthIndicator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            strength: 0,
            progress: {left: '0%'}
        };

    }

    componentWillReceiveProps(nextProps) {
        if (!!nextProps.strength) {
            // calculate progress left length
            var percent = (100 / 5) * nextProps.strength.score;
            this.setState({
                progress: {left: percent + "%"}
            });
        }
    }

    render() {
        return (
            <div className="passwordStrength" id="passwordStrength">
                <div id="passwordStrengthBar" className="progress-wrap progress">
                    <div className="progress-bar progress" ref="progressBar"
                         style={this.state.progress}></div>
                </div>
                <h5 className="text-center font-small no-padding no-margin slim-top-margin">
                    (password
                    strength)</h5>
                <div className="clearfix"></div>
            </div>
        );
    }

}

export default PasswordStrengthIndicator;