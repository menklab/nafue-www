'use strict';

export const PASSWORD_ENTERED = 'PASSWORD_ENTERED';
export function passwordEntered(password) {
    return {
        type: PASSWORD_ENTERED,
        password: password
    }
}