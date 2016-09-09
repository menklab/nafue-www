import React from 'react'
import { Route, IndexRoute } from 'react-router'
import MainLayout from './containers/MainLayout'
import FileSelectPage from './containers/pages/fileSelectPage/fileSelectPage';
import PasswordPromptPage from './containers/pages/passwordPromptPage/passwordPromptPage';


export default (
    <Route component={MainLayout}>
            <Route path="/">
                <IndexRoute component={FileSelectPage}/>
                <Route path="/passwordPrompt" component={PasswordPromptPage}/>
            </Route>
    </Route>
)