import api from '../../Api/Django';

export const GET_UPDATES_FROM_FOLLOWED_PROJECTS_SUCCESS = 'GET_UPDATES_FROM_FOLLOWED_PROJECTS_SUCCESS';

export function getUpdatesFromFollowedProjectsSuccess(updates){
    return {
        type:GET_UPDATES_FROM_FOLLOWED_PROJECTS_SUCCESS, updates
    }
}
export function getUpdatesFromFollowedProjects(){
    return function(dispatch){
        api.getUserUpdates().then(r=>{
            dispatch(getUpdatesFromFollowedProjectsSuccess(r))
        })
    }
}