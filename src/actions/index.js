export const FILE_SELECTED = 'FILE_SELECTED';
export const PASSWORD_ENTERED = 'PASSWORD_ENTERED';

export function fileSelected(file) {
    return {
        type: FILE_SELECTED,
        file: file
    }
}

export function passwordEntered(password) {
    return {
        type: PASSWORD_ENTERED,
        password: password
    }
}
