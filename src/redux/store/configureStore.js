import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from "../reducers";
import createSagaMiddleware from 'redux-saga'
import {initialSaga} from '../sagas';

const sagaMiddleware = createSagaMiddleware()

export function configureStore(initialState){
    const store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(initialSaga);
    store.dispatch({type:"LOAD_PROJECTS"});

    return store;
}