'use strict';

import React from 'react';

import {FileInputDropZone} from '../../pieces/input/file_input_dropzone.jsx'
import { browserHistory } from 'react-router'
import { encryptFile } from '../../../actions.jsx'
import { connect } from 'react-redux'



class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.handleFileSelected = this.handleFileSelected.bind(this);
    }
    render() {
        const {dispatch} = this.props;
        console.log("dispatch: ", dispatch);
        return (
            <div className="row">
                <div className="col-md-8 col-md-push-2 center-block">
                   <FileInputDropZone handleFileSelected={this.handleFileSelected}/>
                </div>
            </div>
        );
    }


    handleFileSelected(e) {
        e.stopPropagation();
        e.preventDefault();
        console.log("props2: ", this.props);
        const {dispatch} = this.props;
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

        // move to processing
        dispatch(encryptFile(file));
        browserHistory.push('/passwordPrompt');
    }
}

function mapStateToProps(state) {
    return {
        encryptFile
    }
}