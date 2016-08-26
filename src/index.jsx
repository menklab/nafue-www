'use strict';

require('../styles/index.scss');


import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router, Route, IndexRoute } from 'react-router'

import {MainNavigation} from './modules/navigation/navigation_main.jsx';
import {Footer} from './modules/footer/footer.jsx';

class MainLayout extends React.Component {
    render() {
        return (
            <div>
                <MainNavigation />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="/">
            </Route>
            <Route path="/how-it-works">
            </Route>
            <Route path="/apps">
            </Route>
        </Route>
    </Router>
    , document.getElementById('root'));
