'use strict';

import React from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { MODE_ENCRYPT, MODE_DECRYPT } from '../../../reducers/index'
import  BusyLoader from '../../../components/pieces/busy_loader/busy_loader'


class ProcessingPage extends React.Component {
    constructor(props) {
        super(props);
        if (!this.props.file) {
            //browserHistory.push('/');
        }

        this.state = {
            //passwordObject: ""
        };
    }

    render() {
        return (
            <div>
                <BusyLoader message="test" />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        file: state.encrypt.file,
        mode: state.encrypt.mode
    }
}


export default connect(mapStateToProps, {})(ProcessingPage);