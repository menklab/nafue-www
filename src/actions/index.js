'use strict';

import { browserHistory } from 'react-router'
import { Post } from './api/fetch'


export const FILE_SELECTED = 'FILE_SELECTED';
export function fileSelected(file) {
    return {
        type: FILE_SELECTED,
        file: file
    }
}

export const PASSWORD_ENTERED = 'PASSWORD_ENTERED';
export function passwordEntered(password) {
    return {
        type: PASSWORD_ENTERED,
        password: password
    }
}

export const ERROR = 'ERROR';
export function error(error) {
    browserHistory.push('/error');
    return {
        type: ERROR,
        error: error
    }
}


export const POST_FILE_HEADER_REQ = 'POST_FILE_HEADER_REQ';
export function postFileHeaderReq(fileHeader) {
    return {
        type: POST_FILE_HEADER_REQ,
        fileHeader
    }
}

export const POST_FILE_HEADER_RES = 'POST_FILE_HEADER_RES';
export function postFileHeaderRes(fileHeader, json) {
    return {
        type: POST_FILE_HEADER_RES,
        fileHeader,
        fileChunks: json
    }
}

export function fetchFileHeader(fileHeader) {
    return function (dispatch) {
        dispatch(postFileHeaderReq(fileHeader));

        var req = new Post('http://localhost:9090/api/files/async', {
            body: JSON.stringify({
                chunkCount: 1
            })
        });
        req.async(
            function (data) { // success
                console.log("Success: ", data);
            },
            function (err) { // fail
                dispatch(error({status: err.status, message: err.message}));
            });
    }
}