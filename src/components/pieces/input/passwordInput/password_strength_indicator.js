'use strict';

import React from 'react';
import zxcvbn from 'zxcvbn';

class PasswordStrengthIndicator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            strength: 0,
            progress: {left: '0px'}
        };

    }
    componentWillReceiveProps(nextProps) {
        if (!!nextProps.strength) {
            // calculate progress left length
            
            this.setState({
                strength: nextProps.strength,
                progress: {left: '20px'}
            });
            console.log("strength: ", nextProps.strength);
        }
    }


    render() {
        return (
            <div className="passwordStrength" id="passwordStrength">
                <div id="passwordStrengthBar" className="progress-wrap progress">
                    <div className="progress-bar progress" style={this.state.progress}></div>
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

// SIGNATURE PROGRESS
function moveProgressBar() {
    var getPercent = ($('.progress-wrap').data('progress-percent') / 100);
    var getProgressWrapWidth = $('.progress-wrap').width();
    var progressTotal = getPercent * getProgressWrapWidth;
    var animationLength = 100;

    // on page load, animate percentage bar to data percentage length
    // .stop() used to prevent animation queueing
    $('.progress-bar').stop().animate({
        left: progressTotal
    }, animationLength);
}

function setBarPercent(obj, percent) {
    $('#passwordStrengthBar').data('progress-percent', percent);
    moveProgressBar();
}
