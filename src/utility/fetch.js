"use strict";

import fetch from 'isomorphic-fetch'

var defaultOptions = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    mode: 'cors',
    cache: 'default'
};

export default class Api {
    constructor(url, options) {
        this.url = url;
        this.options = Object.assign(defaultOptions, options);
        this.fetch = fetch;
    }

    async(success, fail) {
        return this.fetch(this.url, this.options).then(
            function (res) {
                if (res.status == 200 || res.status == 204) {
                    res.json().then(
                        function (json) {
                            success(json);
                        }
                    )
                }
                else {
                    switch (res.status) {
                        default:
                            fail(res);
                            return;
                    }
                }
            }
        )
    }
}


export class Post extends Api {
    constructor(url, options) {
        options = Object.assign({method: 'POST'}, options);
        super(url, options);
    }
}
