'use strict';

import fetch from 'isomorphic-fetch'
import { browserHistory } from 'react-router'

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

        var req = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify({
                chunkCount: 1
            })
        };

        return fetch('http://localhost:9090/api/files', req)
            .then(
                function (res) {
                    if (res.status >= 400) {
                        dispatch(error({status: res.status, message: res.message}));
                        return;
                    }
                    res.json().then(
                        function(json) {
                            console.log("json: ", json);
                        });
                });
    }
}