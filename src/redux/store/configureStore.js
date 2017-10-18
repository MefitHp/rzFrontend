import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from "../reducers";
import createSagaMiddleware from 'redux-saga'
import {initialSaga} from '../sagas';
import thunk from 'redux-thunk';

const sagaMiddleware = createSagaMiddleware()

export function configureStore(initialState){
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk, sagaMiddleware)
    );
    sagaMiddleware.run(initialSaga);
    store.dispatch({type:"LOAD_PROJECTS"});

    return store;
}