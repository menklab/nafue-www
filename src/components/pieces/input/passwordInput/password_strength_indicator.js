'use strict';

import React from 'react';
import zxcvbn from 'zxcvbn';

class PasswordStrengthIndicator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            strength: 0
        };

    }
    componentWillReceiveProps(nextProps) {
        if (!!nextProps.strength) {
            this.setState({strength: nextProps.strength});
            console.log("strength: ", nextProps.strength);
        }
    }

    render() {
        return (
            <div className="passwordStrength" id="passwordStrength">
                <div id="passwordStrengthBar" className="progress-wrap progress"
                     data-progress-percent={this.state.strength}>
                    <div className="progress-bar progress"></div>
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