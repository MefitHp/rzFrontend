/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import './HomePage.css';
import logo from '../../assets/logo.svg';
import PropTypes from 'prop-types';
import Slide from '../slide/Slide';
import Categoria from '../categoria/Categoria';
import Destacados from '../destacados/Destacados';



class HomePage extends React.Component {

    render() {
        return (
        <div className="App">
        	<Slide />
        	 <Destacados />
            <Categoria />
           

        </div>
        );
    }
}

HomePage.propTypes = {
    myProp: PropTypes.string.isRequired
};
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