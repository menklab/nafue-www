import * as ActionTypes from '../actions'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

const MODE_ENCRYPT = 1;
const MODE_DECRYPT = 2;

const initialState = {
    mode: MODE_ENCRYPT
};

function encrypt(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.FILE_SELECTED:
            return Object.assign({}, state, {
                file: action.file,
                mode: MODE_ENCRYPT
            });
            break;
        case ActionTypes.PASSWORD_ENTERED:
            return Object.assign({}, state, {
                password: action.password
            });
            break;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    encrypt,
    routing
});

export default rootReducer