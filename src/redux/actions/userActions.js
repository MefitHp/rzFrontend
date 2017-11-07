import api from '../../Api/Django';
import {usuarioVerificado} from "./usuarioVerificadoActions";
import toastr from 'toastr';
import firebase from '../../Api/firebase';

export const SET_USER_SUCCESS = "SET_USER_SUCCESS";
export const SUBMIT_NEW_PROJECT_SUCCESS = "SUBMIT_NEW_PROJECT_SUCCESS";
export const LOAD_USER_PROJECTS_SUCCESS = "LOAD_USER_PROJECTS_SUCCESS";

export function setUserSuccess(user){
    return {
        type: SET_USER_SUCCESS,
        user
    }
}

export function setUserSuccessPromise(user) {
    return function (dispatch) {
        dispatch(setUserSuccess(user));
        return Promise.resolve();
    }
}

export function submitNewProjectSuccess(project){
    return {
        type: SUBMIT_NEW_PROJECT_SUCCESS,
        project
    }
}

function ExceptionUsuario(mensaje) {
    this.mensaje = mensaje;
    this.nombre = "ExceptionUsuario";
}


export function setUser(user, history){
    return async(dispatch, getState)=>{
        let miExcepcionUsuario;
        try{
            const profile = await api.getSelfProfile();
            user["profile"] = profile;
            if(!user.profile.is_active){
                toastr.warning('Tu cuenta está suspendida. Contacta al administrador');
                dispatch(cerrarSesion());
                miExcepcionUsuario = new ExceptionUsuario("Cuenta suspendida");
                throw miExcepcionUsuario;
            }
            const userId = profile.profile.user.id;
            user["projects"] = await api.getUserProjects(userId);
            dispatch(usuarioVerificado());
            dispatch(setUserSuccessPromise(user));
        }catch(e){
            console.error(e);
            history.push('/');
        }

    }
}

export function signOutSuccess(user) {
    return {type: 'SIGN_OUT', user}
}
export function signOut() {
    return function (dispatch) {
        const user = {};
        dispatch(signOutSuccess(user));
        return Promise.resolve();
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

export function cerrarSesion() {
    return function (dispatch, getState) {
        firebase.auth().signOut()
            .then(()=>{
                localStorage.removeItem('userInfo');
                localStorage.removeItem('userToken');
                dispatch(signOut());
            });
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
            .catch(e=>{
                console.log(e);
                return Promise.reject(e);
            });

    }
}
