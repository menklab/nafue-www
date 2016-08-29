export const ENCRYPT_FILE = 'ENCRYPT_FILE';

export function encryptFile(file) {
    return {
        type: ENCRYPT_FILE,
        file: file
    }
}
