import * as PasswordPromptActions from './passwordPrompt.actions';

const initialState = {
};

function passwordPromptReducer(state = initialState, action) {
    switch (action.type) {
        case PasswordPromptActions.PASSWORD_ENTERED:
            return Object.assign({}, state, {
                password: action.password
            });
            break;
        default:
            return state;
    }
}

export default passwordPromptReducer;