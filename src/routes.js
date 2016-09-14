import React from 'react'
import { Route, IndexRoute } from 'react-router'
import MainLayout from './containers/main_layout'
import FileSelectPage from './containers/pages/file_select_page/file_select_page';
import PasswordPromptPage from './containers/pages/password_prompt_page/password_prompt_page';


export default (
    <Route component={MainLayout}>
            <Route path="/">
                <IndexRoute component={FileSelectPage}/>
                <Route path="/passwordPrompt" component={PasswordPromptPage}/>
            </Route>
    </Route>
)