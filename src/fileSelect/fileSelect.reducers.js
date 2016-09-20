import * as FileSelectActions from './fileSelect.actions';
import {MODE_ENCRYPT} from '../app/const'

const initialState = {
    mode: MODE_ENCRYPT
};

function fileSelect(state = initialState, action) {
    switch (action.type) {
        case FileSelectActions.FILE_SELECTED:
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