'use strict';

import { Post } from '../utility/fetch'

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