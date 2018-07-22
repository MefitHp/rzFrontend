import {
    SET_USER_SUCCESS,
    SUBMIT_NEW_PROJECT_SUCCESS,
    GET_FULL_USER_SUCCESS
} from '../actions/userActions';
// import {
//     ADD_REWARD_SUCCESS,
//     UPDATE_REWARD_SUCCESS,
//     REMOVE_REWARD_SUCCESS,
// } from "../actions/rewardsActions";

// import {
//     POST_UPDATE_SUCCESS,
//     UPDATE_UPDATE_SUCCESS,
//     REMOVE_UPDATE_SUCCESS
// } from "../actions/updatesActions";

export function userReducer(state={}, action){
    switch(action.type){
        case SET_USER_SUCCESS:
            return action.user;
        case GET_FULL_USER_SUCCESS:
            return action.user;
        // case SUBMIT_NEW_PROJECT_SUCCESS:
        //     return {...state, projects:[action.project, ...state.projects]};
        // case 'SIGN_OUT':
        //     return action.user;
        // case ADD_REWARD_SUCCESS:
        //     let reward = action.reward;
        //     let project = state.projects.filter(p=>p.id === reward.project)[0];
        //     project.rewards.push(reward);
        //     let nuevaLista = state.projects.filter(p=>p.id !== project.id);
        //     nuevaLista = [project, ...nuevaLista];
        //     return {...state, projects:nuevaLista};
        // case UPDATE_REWARD_SUCCESS:
        //     let rewar = action.reward;
        //     let projecto = state.projects.filter(p=>p.id === rewar.project)[0];
        //     let listaRewards = projecto.rewards.map(r=>{
        //        if(r.id === rewar.id) return rewar;
        //        return r;
        //     });
        //     projecto.rewards = listaRewards;
        //     let nuevaList = state.projects.filter(p=>p.id !== projecto.id);
        //     nuevaList = [projecto, ...nuevaList];
        //     return {...state, projects:nuevaList};
        // case REMOVE_REWARD_SUCCESS:
        //     let r = action.reward;
        //     let p = state.projects.filter(p=>p.id === r.project)[0];
        //     let l = p.rewards.filter(re=>re.id !== r.id);
        //     p.rewards = l;
        //     let n = state.projects.filter(pr=>pr.id !== p.id);
        //     n = [p, ...n];
        //     return {...state, projects:n};
        // case POST_UPDATE_SUCCESS:
        //     let update = action.update;
        //     let proj = state.projects.filter(p=>p.id === update.project)[0];
        //     proj.updates.push(update);
        //     let nLista = state.projects.filter(p=>p.id !== proj.id);
        //     nLista.push(proj);
        //     return {...state, projects:nLista};
        // case UPDATE_UPDATE_SUCCESS:
        //     let up = action.update;
        //     let proje = state.projects.filter(p=>p.id === up.project)[0];
        //     let lUpdates = proje.updates.map(u=>{
        //         if(u.id === up.id){
        //             return up;
        //         }
        //         return u;
        //     });
        //     proje = {...proje, udpates:lUpdates};
        //     let nLi = state.projects.filter(p=>p.id !== proje.id);
        //     nLi.push(proje);
        //     return {...state, projects:nLi};
        // case REMOVE_UPDATE_SUCCESS:
        //     let upd = action.update;
        //     let projee;
        //     console.log(upd["image"]);
        //     if(upd["image"] === undefined){
        //         projee = state.projects.filter(p=>p.id === upd.project)[0];
        //     }else{
        //         projee = state.projects.filter(p=>p.id === upd.project.id)[0];
        //     }

        //     let lUpd = projee.updates.filter(u=>u.id !== upd.id);
        //     projee = {...projee, updates:lUpd};
        //     let nLiz = state.projects.filter(p=>p.id !== projee.id);
        //     nLiz.push(projee);
        //     return {...state, projects:nLiz};


        default:
            return state;
    }
}