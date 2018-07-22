import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from "../reducers";
import createSagaMiddleware from 'redux-saga'
import {initialSaga} from '../sagas';
import thunk from 'redux-thunk';
import {loadCategory} from "../actions/categoryActions";
import {loadProjects} from '../actions/projectsActions';
import {getProjectsFollowedByCuser} from "../actions/followActions";
import {getUpdatesFromFollowedProjects} from "../actions/updatesActions";


const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState){
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk, sagaMiddleware)
    );
    //sagaMiddleware.run(initialSaga);
    //store.dispatch({type:"LOAD_PROJECTS"});
    store.dispatch(loadProjects());
    store.dispatch(loadCategory());
    //store.dispatch(getProjectsFollowedByCuser());
    //store.dispatch(getUpdatesFromFollowedProjects());

    return store;
}