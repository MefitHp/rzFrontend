import {
    LOAD_PROJECTS_SUCCESS,
    UPDATE_PROJECT_SUCCESS
} from "../actions/projectsActions";

export function projectsReducer(state=[], action){
    switch(action.type){
        case LOAD_PROJECTS_SUCCESS:
            return action.projects;
        case UPDATE_PROJECT_SUCCESS:
            return [...state.map( i => {
                if(i.id === action.project.id){
                    return action.project;
                }
                return i;
            } )];
        default:
            return state;
    }
}






//selectores

export function projectSelector(state, id){
    const p = state.projects.find(p=>p.id == id); //falla con ===
    if(p===undefined) return {category:0};
    return p;
}