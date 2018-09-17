import {connect} from 'react-redux';
import PrivateRoute from './PrivateRoute';

function mapStateToProps(state) {
    return {
        usuario: state.user,
        usuarioVerificado: state.usuarioVerificado,
        fetched: state.usuarioVerificado
    }
}

export default connect(mapStateToProps) (PrivateRoute);