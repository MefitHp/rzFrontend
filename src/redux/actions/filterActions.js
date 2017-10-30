export const SET_FILTER = "SET_FILTER";
export const RESET_FILTER = "RESET_FILTER";
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