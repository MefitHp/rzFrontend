import api from '../../Api/Django';

export const LOAD_ALL_USERS = "LOAD_ALL_USERS";
export const LOAD_ALL_USERS_SUCCESS = "LOAD_ALL_USERS_SUCCESS";

export function loadAllUsersSuccess(users){
    return {
        type: LOAD_ALL_USERS_SUCCESS,
        users
    }
}

export function loadAllUsers(){
    return function(dispatch){
        api.getAllUsers()
            .then(r=>{
                console.log(r);
                dispatch(loadAllUsersSuccess(r));
            })
            .catch(e=>console.log(e));
    }
}