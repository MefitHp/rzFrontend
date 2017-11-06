

import {GET_ALL_DONACIONES_SUCCESS} from "../actions/donacionActions";

export function donaciones(state=[], action){
    switch(action.type){
        case GET_ALL_DONACIONES_SUCCESS:
            return action.donaciones
        default:
            return state
    }
}