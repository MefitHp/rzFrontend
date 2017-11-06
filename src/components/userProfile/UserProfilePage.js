import React, {Component} from 'react';
import {UserProfileDisplay} from "./UserProfileDisplay";
import './UserProfilePage.css';
import * as actions from '../../redux/actions/userActions';
import * as navBarNameActions from '../../redux/actions/navBarNameActions';
//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


function mapStateToProps(state, ownProps){
    console.log(state);
    let userProjects = [];
    if(state.user.projects !== undefined) userProjects = state.user.projects;
    //console.log("Pinche loader? ",Object.keys(state.user).length === 0, Object.keys(state.user).length);
    return {
        user: state.user,
        userProjects:userProjects,
        fetched: Object.keys(state.user).length !== 0,
        history:ownProps.history,
        navBarName: state.navBarName,
        usuarioVerificado: state.usuarioVerificado,
        follows:state.follows,
        updates:state.updates
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(actions,dispatch),
        navBarNameActions: bindActionCreators(navBarNameActions,dispatch),

    };
}

export const UserProfilePage =  connect(mapStateToProps, mapDispatchToProps)(UserProfileDisplay);
