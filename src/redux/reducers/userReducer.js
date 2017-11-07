import {
    SET_USER_SUCCESS,
    SUBMIT_NEW_PROJECT_SUCCESS
} from '../actions/userActions';
import {
    ADD_REWARD_SUCCESS,
    UPDATE_REWARD_SUCCESS,
    REMOVE_REWARD_SUCCESS
} from "../actions/rewardsActions";

export function userReducer(state={}, action){
    switch(action.type){
        case SET_USER_SUCCESS:
            return action.user;
        case SUBMIT_NEW_PROJECT_SUCCESS:
            return {...state, projects:[action.project, ...state.projects]};
        case 'SIGN_OUT':
            return action.user;
        case ADD_REWARD_SUCCESS:
            let reward = action.reward;
            let project = state.projects.filter(p=>p.id === reward.project)[0];
            project.rewards.push(reward);
            let nuevaLista = state.projects.filter(p=>p.id !== project.id);
            nuevaLista = [project, ...nuevaLista];
            return {...state, projects:nuevaLista};
        case UPDATE_REWARD_SUCCESS:
            let rewar = action.reward;
            let projecto = state.projects.filter(p=>p.id === rewar.project)[0];
            let listaRewards = projecto.rewards.map(r=>{
               if(r.id === rewar.id) return rewar;
               return r;
            });
            projecto.rewards = listaRewards;
            let nuevaList = state.projects.filter(p=>p.id !== projecto.id);
            nuevaList = [projecto, ...nuevaList];
            return {...state, projects:nuevaList};
        case REMOVE_REWARD_SUCCESS:
            let r = action.reward;
            let p = state.projects.filter(p=>p.id === r.project)[0];
            let l = p.rewards.filter(re=>re.id !== r.id);
            p.rewards = l;
            let n = state.projects.filter(pr=>pr.id !== p.id);
            n = [p, ...n];
            return {...state, projects:n};


        default:
            return state;
    }
}