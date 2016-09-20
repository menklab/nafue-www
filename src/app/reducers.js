import  fileSelectReducer from './../fileSelect/fileSelect.reducers'
import  passwordPromptReducer from './../passwordPrompt/passwordPrompt.reducers'
import  errorReducer from './../error/error.reducers'
import  fileProcessingReducer from './../fileProcessing/fileProcessing.reducers'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    fileSelect: fileSelectReducer,
    passwordPrompt: passwordPromptReducer,
    fileProcessing: fileProcessingReducer,
    error: errorReducer,
    routing
});

export default rootReducer