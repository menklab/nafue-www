import React from 'react'
import { Route, IndexRoute } from 'react-router'
import MainLayout from './layouts/mainLayout'
import FileSelectRoutes from '../fileSelect/fileSelect.routes';
import PasswordPromptRoutes from '../passwordPrompt/passwordPrompt.routes';
import ErrorRoutes from '../error/error.routes';
import FileProcessingRoutes from '../fileProcessing/fileProcessing.routes';


export default (
    <Route component={MainLayout}>
            <Route path="/">
                {FileSelectRoutes} /* default route */
                {PasswordPromptRoutes}
                {FileProcessingRoutes}
                {Error}
            </Route>
    </Route>
)