'use strict';

import React from 'react';

export class FileInputButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            className: this.props.className
        };
    }
    componentWillReceiveProps(nextProps) {
        if (!!nextProps.className) {
            this.setState({className: nextProps.className});
        }
    }

    render() {
        return (
            <div className={this.state.className}>
                <input className="inputfile" type="file" id="file" name="files[]" onChange={this.props.handleFileSelected}/>
                <label htmlFor="file">Choose a file...</label>
            </div>
        );
    }
}