
import * as ActionTypes from '../actions'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

function encryptFile(state = {}, action) {
    switch (action.type) {
        case ActionTypes.ENCRYPT_FILE:
            return Object.assign({}, state, {
                file: action.file
            });
            break;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    encryptFile,
    routing
});

export default rootReducer