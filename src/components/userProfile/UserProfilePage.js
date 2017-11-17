import React, {Component} from 'react';
import {UserProfileDisplay} from "./UserProfileDisplay";
import './UserProfilePage.css';
import * as actions from '../../redux/actions/userActions';
import * as navBarNameActions from '../../redux/actions/navBarNameActions';
//actions
import {getFollowedProjects} from "../../redux/actions/userActions";
//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAllDonaciones} from "../../redux/actions/donacionActions";
import {getUpdatesFromFollowedProjects} from "../../redux/actions/updatesActions";


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
        //follows:state.follows,
        follows:state.followedProjects,
        updates:state.updates,
        donaciones:state.donaciones,
    }
}

function mapDispatchToProps(dispatch){
    dispatch(getAllDonaciones());
    dispatch(getFollowedProjects());
    dispatch(getUpdatesFromFollowedProjects());
    return {
        actions: bindActionCreators(actions,dispatch),
        navBarNameActions: bindActionCreators(navBarNameActions,dispatch),

    };
}

export const UserProfilePage =  connect(mapStateToProps, mapDispatchToProps)(UserProfileDisplay);
