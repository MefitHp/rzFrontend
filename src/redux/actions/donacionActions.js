import api from '../../Api/Django';


export const GET_ALL_DONACIONES_SUCCESS = 'GET_ALL_DONACIONES_SUCCESS';

export function getAllDonacionesSuccess(donaciones){
    return{
        type:'GET_ALL_DONACIONES_SUCCESS',
        donaciones
    }
}

export function getAllDonaciones(proyectId=null){
    return function(dispatch, getState){
        if(getState().donaciones.length > 0) return;
        api.getDonaciones(proyectId).then(donaciones=>{
            dispatch(getAllDonacionesSuccess(donaciones))
        }).catch(e=>{
            console.log(e);
            return Promise.reject(e);
        })
    }
}