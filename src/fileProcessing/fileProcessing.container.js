'use strict';

import React from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { MODE_ENCRYPT, MODE_DECRYPT } from '../utility/const'
import  BusyLoader from './components/busyLoader'
import { fetchFileHeader } from './fileProcessing.actions'


class ProcessingPage extends React.Component {
    constructor(props) {
        super(props);
        this.getLoaderMessage = this.getLoaderMessage.bind(this);

        // if we are sharing
        if (this.props.mode == MODE_ENCRYPT) {
            if (!this.props.file || !this.props.password) {
                browserHistory.push('/');
            }
        }
        // else we are retrieving
        else {

        }


        this.state = {};
    }

    componentDidMount() {
        if (this.props.mode == MODE_ENCRYPT) {
            this.props.fetchFileHeader({});
        }
        else {

        }
    }

    render() {
        return (
            <div>
                <BusyLoader message={this.getLoaderMessage()}/>
            </div>
        );
    }

    getLoaderMessage() {
        return "Test";
    }
}

function mapStateToProps(state) {
    return {
        file: state.fileSelect.file,
        mode: state.fileSelect.mode,
        password: state.passwordPrompt.password
    }
}


export default connect(mapStateToProps, {
    fetchFileHeader
})(ProcessingPage);