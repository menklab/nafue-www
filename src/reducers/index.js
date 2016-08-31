
import * as ActionTypes from '../actions'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

function selectFile(state = {}, action) {
    switch (action.type) {
        case ActionTypes.SELECT_FILE:
            return Object.assign({}, state, {
                file: action.file
            });
            break;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    selectFile,
    routing
});

export default rootReducer