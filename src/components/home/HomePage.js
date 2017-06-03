/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import { Link } from 'react-router-dom';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import './HomePage.css';
import logo from '../../assets/logo.svg';
import PropTypes from 'prop-types';
import Slide from '../slide/Slide';
import Categoria from '../categoria/Categoria';
//import Destacados from '../destacados/Destacados';
// import PropTypes from 'prop-types';
import { signOut } from '../../Api/firebase';



class HomePage extends React.Component {

    logout = () => {
        signOut()
            .then(()=>{
                this.props.history.push('/login');
            });
    };

    render() {
        return (
        <div className="App">
        	<Slide />
        	
            <Categoria />
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <Link to='/manage/30'>
                <RaisedButton label="Primary" primary={true} />
            </Link>
            <RaisedButton
                onTouchTap={this.logout}
                label="Cerrar sesión"
                secondary={true} />
            <Link to='login/?next=/manage/29'
            >
                <RaisedButton
                    label="Login"
                    primary={true} />
            </Link>
        </div>
        );
    }
}

// HomePage.propTypes = {
//     myProp: PropTypes.string.isRequired
// };
//
// function mapStateToProps(state, ownProps) {
//     return {
//         state: state
//     };
// }
//
// function mapDispatchToProps(dispatch) {
//     return {
//         // actions: bindActionCreators(actions, dispatch)
//     };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
export default HomePage;
