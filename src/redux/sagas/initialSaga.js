import {call, put, take, takeEvery, takeLatest} from 'redux-saga/effects';
import api from '../../Api/Django';


function* fetchProjects(action) {
    try {
        const projects = yield call(api.getAxiosAllProjects);
        //console.log(projects);
        yield put({type: "LOAD_PROJECTS_SUCCESS", projects});
    } catch (e) {
        //yield put({type: "USER_FETCH_FAILED", message: e.message});
        console.log(e);
    }
}

export function* initialSaga(){
    yield takeLatest("LOAD_PROJECTS", fetchProjects);
}