'use strict';

import React from 'react';

class PasswordInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    render() {
        return (
            <div id="passCont" className="text-center no-select">
                <input
                    id="password" type="password"
                    className="input-text" placeholder="Enter Password"
                    value={this.state.value} onChange={this.handlePasswordChange}
                />
            </div>
        );
    }

    handlePasswordChange(e) {
        this.props.onPasswordChange(e);
    }
}

export default PasswordInput;