import api from '../../Api/Django';

export const GET_PROJECTS_FOLLOWED_BY_CUSER_SUCCES = 'GET_PROJECTS_FOLLOWED_BY_CUSER_SUCCES';
export const ADD_FOLLOW = 'ADD_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';


export function getProjectsFollowedByCuserSuccess(follows){
    return{type:GET_PROJECTS_FOLLOWED_BY_CUSER_SUCCES, follows}
}


export function addFollowSuccess(follow) {
    return {
        type: ADD_FOLLOW,
        follow
    }
}

export function removeFollowSuccess(follow) {
    return {
        type: REMOVE_FOLLOW,
        follow
    }
}

export function addFollow(follow) {
    return function( dispatch, getState ){
        dispatch(addFollowSuccess(follow));
        return Promise.resolve();
    }
}

export function removeFollow(follow) {
    return function( dispatch, getState ){
        dispatch(removeFollowSuccess(follow));
        return Promise.resolve();
    }
}
export function getProjectsFollowedByCuser(){
    return function (dispatch) {
        api.getAllFollowedProjects().then(r=>{

            dispatch(getProjectsFollowedByCuserSuccess(r))
        }).catch(e=>{
            console.log(e)
        })
    }
}



