export const SET_FILTER = "SET_FILTER";
export const RESET_FILTER = "RESET_FILTER";
//export const OPEN_MENU = "OPEN_MENU";
//export const CLOSE_MENU = "CLOSE_MENU";
export const TOGGLE_MENU = "TOGGLE_MENU";
export const SEARCH = "SEARCH";

export function setFilter(filter){
    return {
        type: SET_FILTER,
        filter
    }
}

export function search(value){
    return {
        type:SEARCH,
        value
    }
}


export function toggleMenu(){
    return {
        type:TOGGLE_MENU
    }
}