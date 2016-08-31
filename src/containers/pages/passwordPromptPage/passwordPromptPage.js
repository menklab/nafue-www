'use strict';

import React from 'react';
import { connect } from 'react-redux'
//import { selectFile } from '../../../actions'


class PasswordPromptPage extends React.Component {
    constructor(props) {
        super(props);
        //this.handleFileSelected = this.handleFileSelected.bind(this);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-8 col-md-push-2 center-block">
                        <p>password prompt</p>
                    </div>
                </div>
            </div>
        );
    }


    //handleFileSelected(e) {
    //    e.stopPropagation();
    //    e.preventDefault();
    //
    //    var files;
    //    if (!!e.dataTransfer && !!e.dataTransfer.files) {
    //        files = e.dataTransfer.files;
    //    }
    //
    //    if (!!e.target && !!e.target.files) {
    //        files = e.target.files;
    //    }
    //
    //    // only 1 file at a time
    //    if (files.length > 1) {
    //        error("Only 1 file at a time.");
    //        return;
    //    }
    //
    //    var file = files[0];
    //
    //    // getPassword
    //    selectFile(file);
    //    console.log(this);
    //    //browserHistory.push('/passwordPrompt');
    //}
}

function mapStateToProps(state) {
    return {
        //selectFile
    }
}

export default connect(mapStateToProps, {})(PasswordPromptPage);