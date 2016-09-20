import * as ActionTypes from './error.actions';

const initialState = {
};

function errorReducer(state = {
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

export default errorReducer;