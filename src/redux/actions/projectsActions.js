import api from '../../Api/Django';

export const LOAD_PROJECTS_SUCCESS = "LOAD_PROJECTS_SUCCESS";

export function loadProjectsSuccess(projects){
    return {
        type:LOAD_PROJECTS_SUCCESS,
        projects
    }
}