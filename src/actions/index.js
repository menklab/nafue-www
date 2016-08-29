export const ENCRYPT_FILE = 'ENCRYPT_FILE';

export function encryptFile(file) {
    console.log("encrypt file: ", file);
    return {
        type: ENCRYPT_FILE,
        file: file
    }
}
