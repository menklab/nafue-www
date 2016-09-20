import React from 'react'
import { Route, IndexRoute } from 'react-router'
import MainLayout from './layouts/mainLayout'
import FileSelectPage from '../fileSelect/fileSelect.container';
import PasswordPromptPage from '../passwordPrompt/passwordPrompt.container';
import ProcessingPage from '../containers/pages/processing_page/processing_page';
import ErrorPage from '../containers/pages/error_page/error_page';


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