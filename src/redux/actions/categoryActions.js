import api from '../../Api/Django';

export const LOAD_CATEGORY_SUCCESS = "LOAD_CATEGORY_SUCCESS";

function loadCategorySuccess(categories){
    return {
        type: LOAD_CATEGORY_SUCCESS,
        categories
    }
}

export function loadCategory(){
    return function(dispatch){
        api.getCategories()
            .then(r=>dispatch(loadCategorySuccess(r)))
            .catch(e=>console.log(e));
    }
}