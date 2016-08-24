'use strict';

require('./styles/fonts.scss');
require('./styles/vendor.scss');
require('./styles/app.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router, Route, IndexRoute } from 'react-router'

// setup history

var MainLayout = React.createClass({
    render: function () {
        return (
            <h1>Drop file here</h1>
        );
    }
});

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={MainLayout}>
            
        </Route>
    </Router>
    , document.getElementById('root'));
