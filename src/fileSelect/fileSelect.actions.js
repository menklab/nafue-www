'use strict';

export const FILE_SELECTED = 'FILE_SELECTED';
export function fileSelected(file) {
    return {
        type: FILE_SELECTED,
        file: file
    }
}