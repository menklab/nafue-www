import * as ActionTypes from '../actions'
import  fileSelectReducer from './../fileSelect/fileSelect.reducers'
import  passwordPromptReducer from './../passwordPrompt/passwordPrompt.reducers'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

function error(state = {
    error: {}
}, action) {
    switch (action.type) {
        case ActionTypes.ERROR:
            return Object.assign({}, state, {
                error: action.error
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    //secure,
    fileSelect: fileSelectReducer,
    passwordPrompt: passwordPromptReducer,
    error,
    routing
});

export default rootReducer