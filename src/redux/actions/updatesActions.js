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
            console.log(r);
            dispatch(getUpdatesFromFollowedProjectsSuccess(r))
        })
    }
}

//manager
export const POST_UPDATE_SUCCESS = "POST_UPDATE_SUCCESS";
export const UPDATE_UPDATE_SUCCESS = "UPDATE_UPDATE_SUCCESS";
export const REMOVE_UPDATE_SUCCESS = "REMOVE_UPDATE_SUCCESS";

function postUpdateSuccess(update){
    return {
        type:POST_UPDATE_SUCCESS,
        update
    }
}

function updateUpdateSuccess(update){
    return {
        type:UPDATE_UPDATE_SUCCESS,
        update
    }
}

function removeUpdateSuccess(update){
    return {
        type:REMOVE_UPDATE_SUCCESS,
        update
    }
}

export const saveUpdate = (update) => (dispatch) => {
    if(update.id){
        return api.updateUpdates(update)
            .then(r=>{
                dispatch(updateUpdateSuccess(r));
                return Promise.resolve(r);
            })
            .catch(e=>{
                console.log(e);
                return Promise.reject(e);
            });
    }
    return api.postUpdates(update)
        .then(r=>{
            dispatch(postUpdateSuccess(r));
            return Promise.resolve(r);
        })
        .catch(e=>{
            console.log(e);
            return Promise.reject(e);
        });
}

export const removeUpdate = (update) => (dispatch) => {
    return api.removeUpdate(update)
        .then(r=>{
            dispatch(removeUpdateSuccess(update));
            return Promise.resolve(r);
    })
        .catch(e=>{
            console.log(e);
            return Promise.reject(e);
        });
};


