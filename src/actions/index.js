export const SELECT_FILE = 'SELECT_FILE';

export function selectFile(file) {
    console.log("select file: ", file);
    return {
        type: SELECT_FILE,
        file: file
    }

}
