'use strict';

import React from 'react';

import {FileInputButton} from './file_input_button.jsx'


export class FileInputDropZone extends React.Component {

    constructor(props) {
        super(props);
        this.state = { activeHover: false};
        this.getDropZoneClass = this.getDropZoneClass.bind(this);
        this.handleDragOver = this.handleDragOver.bind(this);
        this.handleDragEnter = this.handleDragEnter.bind(this);
        this.handleDragLeave = this.handleDragLeave.bind(this);
        this.handleFileSelected = this.handleFileSelected.bind(this);
    }

    componentDidMount() {
        this.refs.dz.addEventListener('dragenter', this.handleDragEnter);
        this.refs.dz.addEventListener('dragleave', this.handleDragLeave);
        this.refs.dz.addEventListener('dragover', this.handleDragOver);
        this.refs.dz.addEventListener('drop', this.handleFileSelected);

    }

    componentWillUnmount() {
        this.refs.dz.removeEventListener("dragenter", this.handleDragEnter);
        this.refs.dz.removeEventListener("dragleave", this.handleDragLeave);
        this.refs.dz.removeEventListener("dragover", this.handleDragOver);
        this.refs.dz.removeEventListener('drop', this.handleFileSelected);
    }

    render() {
        return (
            <div id="dropZone" ref="dz" className={this.getDropZoneClass()}>
                {!this.state.activeHover ? <FileInputButton handleFileSelected={this.props.handleFileSelected}/> : null }
                <h3 className="hidden-xs no-point-events">Drop file here</h3>
            </div>
        );
    }

    getDropZoneClass() {
        var baseClass = "dropZone no-select";
        if (this.state.activeHover) {
            return (baseClass + " dropZone-file-hover");
        }
        return baseClass
    }

    handleFileSelected(e) {
        this.setState({ activeHover: false });
        this.props.handleFileSelected(e);
    }

    handleDragOver(e) {
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
    }

    handleDragEnter(e) {
        this.setState({ activeHover: true });
        e.stopPropagation();
        e.preventDefault();
    }

    handleDragLeave(e) {
        this.setState({ activeHover: false });
        e.stopPropagation();
        e.preventDefault();
    }
}