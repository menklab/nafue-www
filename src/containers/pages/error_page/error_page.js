'use strict';

import React from 'react';
import { connect } from 'react-redux'

class ErrorPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <br />
                <div className="row">
                    <div className="col-xs-12">
                        <p className="text-center text-red">We detected an error. For your security we can not continue. Please
                            go <a href="/">home</a> and try again.</p>
                    </div>
                </div>
            </div>
        );
    }

}


export default connect()(ErrorPage);