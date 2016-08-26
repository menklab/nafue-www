'use strict';

import React from 'react';

import {FileInputDropZone} from '../../modules/input/file_input_dropzone.jsx'


export class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.handleFileSelected = this.handleFileSelected.bind(this);
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-8 col-md-push-2 center-block">
                   <FileInputDropZone handleFileSelected={this.handleFileSelected}/>
                </div>
            </div>
        );
    }

    handleFileSelected(e) {
        console.log("hi");
        e.stopPropagation();
        e.preventDefault();
        var files;
        if (!!e.dataTransfer && !!e.dataTransfer.files) {
            files = e.dataTransfer.files;
        }

        if (!!e.target && !!e.target.files) {
            files = e.target.files;
        }

        // only 1 file at a time
        if (files.length > 1) {
            error("Only 1 file at a time.");
            return;
        }

        var file = files[0];
        console.log("file: ", file);
    }
}