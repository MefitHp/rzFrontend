import api from '../../Api/Django';

export const GET_PROJECTS_FOLLOWED_BY_CUSER_SUCCES = 'GET_PROJECTS_FOLLOWED_BY_CUSER_SUCCES';


export function getProjectsFollowedByCuserSuccess(follows){
    return{type:GET_PROJECTS_FOLLOWED_BY_CUSER_SUCCES, follows}
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



