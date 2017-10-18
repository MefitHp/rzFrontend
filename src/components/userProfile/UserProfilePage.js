import React, {Component} from 'react';
import {UserProfileDisplay} from "./UserProfileDisplay";
import './UserProfilePage.css';
//redux
import {connect} from 'react-redux';


function mapStateToProps(state, ownProps){
    console.log(state);
    let userProjects = [];
    if(state.user.projects !== undefined) userProjects = state.user.projects;
    //console.log("Pinche loader? ",Object.keys(state.user).length === 0, Object.keys(state.user).length);
    return {
        user: state.user,
        userProjects:userProjects,
        fetched: Object.keys(state.user).length !== 0,
        history:ownProps.history
    }
}

function mapDispatchToProps(){
    return {};
}

export const UserProfilePage =  connect(mapStateToProps, mapDispatchToProps)(UserProfileDisplay);
