'use strict';

require('../styles/index.scss');


import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {app} from './reducers.jsx'
import {MainNavigation} from './components/parts/navigation/navigation_main.jsx';
import {Footer} from './components/parts/footer/footer.jsx';
import {HomePage} from './components/pages/home/home.jsx';
let store = createStore(app);

// log state
console.log(store.getState());
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

class MainLayout extends React.Component {
    render() {
        return (
            <div>
                <MainNavigation />
                <div id="wrapper">
                    <div id="content">
                        <div className="for-site-indexing no-select">
                            <h1>Nafue</h1>
                            <p>Anonymous, secure file transfers that self destruct after first use or 24 hours using
                                client side
                                encryption.</p>
                        </div>
                        <div className="row">
                            <div className="col-md-8 col-md-push-2">
                                <div className="text-center">
                                    <a className="hidden-xs" href="/">
                                        <img src="/img/logo.jpg" alt="Nafue.com"
                                             height="100px"/>
                                    </a>
                                    <a className="visible-xs" href="/">
                                        <img src="/img/logo.jpg" alt="Nafue.com"
                                             width="250px"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <br />
                        <div className="container">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route component={MainLayout}>
                <Route path="/">
                    <IndexRoute component={HomePage}/>
                </Route>
                <Route path="/passwordPrompt">
                </Route>
                <Route path="/how-it-works">
                </Route>
                <Route path="/apps">
                </Route>
            </Route>
        </Router>
    </Provider>
    , document.getElementById('root'));
