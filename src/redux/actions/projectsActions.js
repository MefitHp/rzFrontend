//import api from '../../Api/Django';
//import toastr from 'toastr';
import {getProjects, selfProjects} from '../../Api/nodejs';

export const LOAD_PROJECTS_SUCCESS = "LOAD_PROJECTS_SUCCESS";
export const GET_REWARD_SUCCESS = "GET_REWARD_SUCCESS";
export const UPDATE_PROJECT_SUCCESS = "UPDATE_PROJECT_SUCCESS";

export function loadProjectsSuccess(projects){
    return {
        type:LOAD_PROJECTS_SUCCESS,
        projects
    }
}

export function updateProjectSuccess(project) {
    return {
        type: UPDATE_PROJECT_SUCCESS,
        project
    }
}
export function getRewardSuccess(reward){
    return {
        type:GET_REWARD_SUCCESS,
        reward
    }
}

export function getReward(id){
    // return async function(dispatch){
    //     const reward = await api.getReward(id);
    //     dispatch(getRewardSuccess(reward));
    // }
}

//2018
export const loadProjects = () => (dispatch) => {
    return getProjects()
        .then(items=>{
            //console.log(items);
            dispatch(loadProjectsSuccess(items.items))
            return items;
        })
        .catch(e=>{
            console.log(e);
            //dispatch({type:"ERROR"});
            //toastr.error("falló");
            return Promise.reject(e);
        });
};

//2018



export const saveProject = (project) => (dispatch) =>{
        // return api.updateProject(project.id, project)
        //     .then(p=>{
        //         dispatch(updateProjectSuccess(p));
        //         //toastr.success("Tu video se guardó correctamente");
        //         return Promise.resolve(p);
        //     })
        //     .catch(e=>{
        //         console.log(e);
        //         //dispatch({type:"ERROR"});
        //         //toastr.error("falló");
        //         return Promise.reject();
        //     });

};