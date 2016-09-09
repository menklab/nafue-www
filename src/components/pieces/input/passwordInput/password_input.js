'use strict';

import React from 'react';

class PasswordInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }
    //componentWillReceiveProps(nextProps) {
    //    if (!!nextProps.className) {
    //        this.setState({className: nextProps.className});
    //    }
    //}

    render() {
        return (
            <div id="passCont" className="text-center no-select">
                <p id="badPass" className="text-center text-red">Bad Password, Try Again.</p>
                <input
                    id="password" type="password"
                    className="input-text" placeholder="Enter Password"
                    value={this.state.value} onChange={this.handlePasswordChange}
                />

                <button className="btn full-width" id="share" onclick="shareFile()" disabled>Share File
                </button>
                <button className="btn full-width" id="downloadBtn" onclick="decryptFile()">
                    Unlock
                    File
                </button>
            </div>
        );
    }

    handlePasswordChange(e) {
        console.log("update: ", e.target.value);
        this.props.onPasswordChange(e);
    }
}

export default PasswordInput;