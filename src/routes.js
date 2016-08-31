import React from 'react'
import { Route, IndexRoute } from 'react-router'
import MainLayout from './containers/MainLayout'
import HomePage from './containers/pages/homePage/homePage';
import PasswordPromptPage from './containers/pages/passwordPromptPage/passwordPromptPage';


export default (
    <Route component={MainLayout}>
            <Route path="/">
                <IndexRoute component={HomePage}/>
                <Route path="/passwordPrompt" component={PasswordPromptPage}/>
            </Route>
    </Route>
)