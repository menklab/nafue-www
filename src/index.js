'use strict';

require('./index.scss');

import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import App from './app/App'
import configureStore from './app/configureStore'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
    <App store={store} history={history} />,
    document.getElementById('app')
);
