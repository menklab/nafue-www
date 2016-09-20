import React from 'react'
import { Route, IndexRoute } from 'react-router'
import MainLayout from './layouts/mainLayout'
import FileSelectPage from '../fileSelect/fileSelect.container';
import PasswordPromptPage from '../passwordPrompt/passwordPrompt.container';
import ProcessingPage from '../fileProcessing/fileProcessing.container.js';
import ErrorPage from '../error/error.container';


export default (
    <Route component={MainLayout}>
            <Route path="/">
                <IndexRoute component={FileSelectPage}/>
                <Route path="/passwordPrompt" component={PasswordPromptPage}/>
                <Route path="/processing" component={ProcessingPage}/>
                <Route path="/error" component={ErrorPage}/>
            </Route>
    </Route>
)