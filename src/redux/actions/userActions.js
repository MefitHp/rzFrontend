import api from '../../Api/Django';

export const SET_USER_SUCCESS = "SET_USER_SUCCESS";
export const SUBMIT_NEW_PROJECT_SUCCESS = "SUBMIT_NEW_PROJECT_SUCCESS";
export const LOAD_USER_PROJECTS_SUCCESS = "LOAD_USER_PROJECTS_SUCCESS";

export function setUserSuccess(user){
    return {
        type: SET_USER_SUCCESS,
        user
    }
}

export function submitNewProjectSuccess(project){
    return {
        type: SUBMIT_NEW_PROJECT_SUCCESS,
        project
    }
}

export function setUser(user){
    return async(dispatch)=>{
        const profile = await api.getSelfProfile();
        user["profile"] = profile;
        const userId = profile.profile.user.id;
        const userProjects = await api.getUserProjects(userId);
        user["projects"] = userProjects;
        dispatch(setUserSuccess(user));
    }
}

export function updateUserSuccess(user) {
    return {
        type: "UPDATE_USER_SUCCESS",
        user
    }
}

export function saveUser(id, profileDjango) {
    return async(dispatch,getState)=>{
        try{
            const profile = await api.updateProfile(id,profileDjango);
            let user = getState().user;
            user.profile['profile'] = profile.data;
            dispatch(setUserSuccess(user));
        }catch (e){
            console.error(e);
        }

    }
}

export function submitNewProject(project){
    return function(dispatch){
        return api.postNewProject(project)
            .then(response=>{
                console.log("guarde?", response);
                dispatch(submitNewProjectSuccess(response));
                return response;
            })
            .catch(e=>console.log(e));

    }
}
