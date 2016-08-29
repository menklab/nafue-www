import { combineReducers } from 'redux'
import { ENCRYPT_FILE } from './actions.jsx'


function encryptFile(state = {}, action) {
    switch (action.type) {
        case ENCRYPT_FILE:
            return Object.assign({}, state, {
                file: action.file
            });

            break;
        default:
            return state;
    }
}

export const app = combineReducers({
    encryptFile
});