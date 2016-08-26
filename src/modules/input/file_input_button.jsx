'use strict';

import React from 'react';

export class FileInputButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="dropSelect">
                <input className="inputfile" type="file" id="file" name="files[]" onChange={this.props.handleFileSelected}/>
                <label htmlFor="file">Choose a file...</label>
            </div>
        );
    }
}