import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

//const loggerMiddleware = createLogger();


export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            thunk
            //,loggerMiddleware
        )
    )
}