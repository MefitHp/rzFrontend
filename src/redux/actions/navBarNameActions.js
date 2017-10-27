export function changeNameSuccess(name) {
    return { type: 'CHANGE_NAME', name};
}

export function changeName(name) {
    return function (dispatch, getState) {
        dispatch(changeNameSuccess(name));
        return Promise.resolve();

    }
}

export function resetName(name) {
    return {type: 'RESET_NAME', name}
}