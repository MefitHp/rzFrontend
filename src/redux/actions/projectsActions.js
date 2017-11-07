import api from '../../Api/Django';

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
    return async function(dispatch){
        const reward = await api.getReward(id);
        dispatch(getRewardSuccess(reward));
    }
}

export function saveProject(project){
    return function(dispatch){
        return api.updateProject(project.id, project)
            .then(p=>dispatch(updateProjectSuccess(p)))
            .catch(e=>{
                console.log(e);
                dispatch({type:"ERROR"});
            });
    }
}