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



class HomePage extends React.Component {

    render() {
        return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <RaisedButton label="Primary" primary={true} />

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