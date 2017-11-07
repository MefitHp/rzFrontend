import {call, put, take, takeEvery, takeLatest} from 'redux-saga/effects';
import api from '../../Api/Django';


function* fetchProjects(action) {
    try {
        let projects = yield call(api.getAxiosAllProjects);

        for(let i = 0;i<=projects.length;i++){
            if(projects[i]!=undefined){
                projects[i]['donadores'] = projects[i].donaciones.length;

                if(projects[i].donaciones.length!==0){
                    for(let j=0;j<=projects[i].donaciones.length;j++){
                        if(projects[i].donaciones[j]!==undefined){
                            console.log(projects[i].donaciones[j].monto);
                            if(projects[i]['actual_score']===undefined){
                                projects[i]['actual_score']=0;
                            }
                            projects[i]['actual_score'] += parseFloat(projects[i].donaciones[j].monto);
                        }
                    }
                    projects[i]['actual_percent'] = projects[i].actual_score*100/projects[i].goal;
                }else{
                    projects[i]['actual_percent'] = 0;
                    projects[i]['actual_score']=0;
                }
            }
            console.log(projects[i])

        }
        yield put({type: "LOAD_PROJECTS_SUCCESS", projects});
    } catch (e) {
        //yield put({type: "USER_FETCH_FAILED", message: e.message});
        console.log(e);
        yield put({type: "LOAD_PROJECTS_SUCCESS", projects:[] });
    }
}

export function* initialSaga(){
    yield takeLatest("LOAD_PROJECTS", fetchProjects);
}