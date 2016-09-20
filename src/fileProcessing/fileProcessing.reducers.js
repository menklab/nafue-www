import * as ActionTypes from './fileProcessing.actions';
import {MODE_ENCRYPT} from '../utility/const'

const initialState = {
    mode: MODE_ENCRYPT
};

function fileSelect(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.FILE_SELECTED:
            return Object.assign({}, state, {
                file: action.file,
                mode: MODE_ENCRYPT
            });
            break;
        default:
            return state;
    }
}

export default fileSelect;