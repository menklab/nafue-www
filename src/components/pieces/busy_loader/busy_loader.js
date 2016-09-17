'use strict';

import React from 'react';


class BusyLoader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: props.message
        };

    }

    componentWillReceiveProps(nextProps) {
        if (!!nextProps.message) {
            this.setState({
                message: nextProps.message
            })
        }
    }

    render() {
        return (
            <div id="busy" className="no-select">
                <br/>
                <div className="loading">
                    <span id="busyMessage">{this.state.message}</span>
                </div>
            </div>
        );
    }

}

export default BusyLoader;