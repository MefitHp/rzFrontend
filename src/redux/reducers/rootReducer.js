import {combineReducers} from 'redux';
import {projectsReducer} from "./";
import {userReducer} from "./userReducer";
import {adminReducer} from "./adminReducer";
import {navBarNameReducer} from './navBarNameReducer';
import {usuarioVerificadoReducer} from './usuarioVerificadoReducer';
export const rootReducer = combineReducers({
    projects:projectsReducer,
    user: userReducer,
    admin:adminReducer,
    navBarName: navBarNameReducer,
    usuarioVerificado: usuarioVerificadoReducer
});