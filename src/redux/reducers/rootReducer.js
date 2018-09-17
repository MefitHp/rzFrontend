import {combineReducers} from 'redux';
import {projectsReducer} from "./";
import {userReducer} from "./userReducer";
import {adminReducer} from "./adminReducer";
import {navBarNameReducer} from './navBarNameReducer';
import {usuarioVerificadoReducer} from './usuarioVerificadoReducer';
import {filterReducer} from "./filterReducer";
import {rewardsReducer} from "./rewardsReducer";
import {donaciones} from "./donacionesReducer";
import {categoryReducer} from "./categoryReducer";
import {followReducer} from "./followReducer";
import {updatesReducer} from "./updatesReducer";
import {followedProjects} from "./projectsReducer";


export const rootReducer = combineReducers({
    projects:projectsReducer,
    followedProjects,
    user: userReducer,
    admin:adminReducer,
    navBarName: navBarNameReducer,
    usuarioVerificado: usuarioVerificadoReducer,
    rewards:rewardsReducer,
    donaciones:donaciones,
    filter:filterReducer,
    category:categoryReducer,
    follows:followReducer,
    updates:updatesReducer,

});