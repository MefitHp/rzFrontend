export function usuarioVerificadoSuccess() {
    return {type: 'USUARIO_VERIFICADO', verificado:true}
}

export function usuarioNoVerificadoSuccess() {
    return {type: 'USUARIO_NO_VERIFICADO', verificado:false}
}

export function usuarioVerificado() {
    return function (dispatch) {
        dispatch(usuarioVerificadoSuccess());
        return Promise.resolve();
    }
}

export function usuarioNoVerificado() {
    return function (dispatch) {
        dispatch(usuarioNoVerificadoSuccess());
        return Promise.resolve();
    }
}

