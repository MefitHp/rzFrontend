import api from '../../Api/Django';


export const GET_ALL_DONACIONES_SUCCESS = 'GET_ALL_DONACIONES_SUCCESS';

export function getAllDonacionesSuccess(donaciones){
    return{
        type:'GET_ALL_DONACIONES_SUCCESS',
        donaciones
    }
}

export function getAllDonaciones(){
    return function(dispatch){
        api.getDonaciones().then(donaciones=>{
            dispatch(getAllDonacionesSuccess(donaciones))
        })
    }
}