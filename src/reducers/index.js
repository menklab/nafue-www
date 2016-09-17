import * as ActionTypes from '../actions'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

export const MODE_ENCRYPT = 1;
export const MODE_DECRYPT = 2;

const initialState = {
    mode: MODE_ENCRYPT
};

function secure(state = initialState, action) {
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

function fileAttributes(state = {
    isFetching: false,
    fileChunks: [],
    fileHeader: {}
}, action) {

    switch (action.type) {
        case ActionTypes.POST_FILE_HEADER_REQ:
            return Object.assign({}, state, {
                isFetching: true
            });
        case ActionTypes.POST_FILE_HEADER_RES:
            return Object.assign({}, state, {
                isFetching: false,
                fileChunks: action.fileChunks,
                fileHeader: action.fileHeader
            });
        default:
            return state;
    }
}

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
    secure,
    fileAttributes,
    error,
    routing
});

export default rootReducer