import {combineReducers} from 'redux';
import {projectsReducer} from "./";
import {userReducer} from "./userReducer";
import {adminReducer} from "./adminReducer";

import {navBarNameReducer} from './navBarNameReducer';
import {usuarioVerificadoReducer} from './usuarioVerificadoReducer';

import {filterReducer} from "./filterReducer";

import {rewardsReducer} from "./rewardsReducer";
import {donaciones} from "./donacionesReducer";
import {followReducer} from "./followReducer";
import {updatesReducer} from "./updatesReducer";

export const rootReducer = combineReducers({
    projects:projectsReducer,
    user: userReducer,
    admin:adminReducer,
    navBarName: navBarNameReducer,
    usuarioVerificado: usuarioVerificadoReducer,
    rewards:rewardsReducer,

    donaciones:donaciones,

    filter:filterReducer,
    follows:followReducer,
    updates:updatesReducer,

});