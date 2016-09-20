import * as ActionTypes from './passwordPrompt.actions';

const initialState = {
};

function passwordPromptReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.PASSWORD_ENTERED:
            return Object.assign({}, state, {
                password: action.password
            });
            break;
        default:
            return state;
    }
}

export default passwordPromptReducer;