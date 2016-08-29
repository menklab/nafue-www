'use strict';

import React from 'react';

class MainNavigation extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                {/* mobile header */}
                <div className="row visible-xs header-padding-top">
                    <div className="col-xs-12">
                            <nav className="text-center">
                                <a href="/">Home</a>&nbsp;|&nbsp;
                                <a href="/how-it-works.html">How It Works</a>&nbsp;|&nbsp;
                                <a href="/apps.html">Apps</a>&nbsp;|&nbsp;
                                <a href="http://us12.campaign-archive2.com/home/?u=4845ba4aa1bc87b9521dd68e2&id=21c1ef62bd"
                                   target="_blank"
                                   title="View previous campaigns">Updates</a>
                            </nav>
                    </div>
                </div>
                {/* header */}
                <div className="row hidden-xs header-padding-top">
                    <div className="col-xs-3 pull-left">
                        <a href="/">Home</a>
                    </div>
                    <div className="col-xs-9 pull-right">
                            <nav className="text-right">
                                <a href="/how-it-works.html">How It Works</a>&nbsp;|&nbsp;
                                <a href="/apps.html">Apps</a>&nbsp;|&nbsp;
                                <a href="http://us12.campaign-archive2.com/home/?u=4845ba4aa1bc87b9521dd68e2&id=21c1ef62bd"
                                   target="_blank"
                                   title="View previous campaigns">Updates</a>
                            </nav>
                    </div>
                </div>
                {/* end header */}
            </div>
        );
    }
}
export default MainNavigation;