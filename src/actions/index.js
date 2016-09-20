'use strict';

import { browserHistory } from 'react-router'



export const ERROR = 'ERROR';
export function error(error) {
    browserHistory.push('/error');
    return {
        type: ERROR,
        error: error
    }
}