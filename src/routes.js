import React from 'react'
import { Route, IndexRoute } from 'react-router'
import MainLayout from './containers/MainLayout'
import HomePage from './containers/pages/homePage/homePage';


export default (
    <Route component={MainLayout}>
            <Route path="/">
                <IndexRoute component={HomePage}/>
            </Route>
    </Route>
)