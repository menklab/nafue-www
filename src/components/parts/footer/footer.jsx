'use strict';

import React from 'react';

export class Footer extends React.Component {
    render() {
        return (
            <div>
                {/* footer */}
                <div className="footer hidden-xs">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-6 col-xs-offset-3">
                                <p className="text-center">
                                    &copy;&nbsp;2016 Nafue.com&nbsp;|&nbsp;View on <a
                                    href="https://github.com/menkveldj/nafue">Github</a>&nbsp;|&nbsp;
                                    <a
                                        href="/docs">Api
                                        Docs</a>
                                </p>
                            </div>
                            <div className="col-xs-12 col-sm-1 col-sm-offset-2">
                                <p className="text-center text-gray-dark">
                                    <i className="icon icon-canary text-large pad-sides"/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* mobile footer */}
                <div className="footer hidden-sm hidden-md hidden-lg">
                    <div className="container-fluid">
                        <br/>
                        <div className="row">
                            <div className="col-xs-12">
                                <p className="text-center"> &copy;&nbsp;2016 Nafue.com</p>
                                <p className="text-center">View on <a
                                    href="https://github.com/menkveldj/nafue">Github</a></p>
                                <p className="text-center"><a href="/docs">Api Docs</a></p>
                                <p className="text-center text-gray-dark">
                                    <i className="icon icon-canary text-large pad-sides"/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}