import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {PayDetailDisplay} from './PayDetailDisplay';
import * as projectsActions from '../../redux/actions/projectsActions'
import {selectProject} from '../../redux/selectors/projectSelector';

function mapStateToProps(state, ownProps){
    console.log(state);
    return {
        ...state.rewards.currentReward,
        project:selectProject(state.projects, state.rewards.currentReward.project),
        fetched: Object.keys(state.rewards.currentReward).length !== 0
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    try{
        const rewardId = ownProps.match.params.rewardId;
        dispatch(projectsActions.getReward(rewardId));
    } catch(e){
        const rewardId = null;
    }
    return {
        actions: bindActionCreators(dispatch)
    };
}

export const PayDetailContainer = connect(mapStateToProps, mapDispatchToProps)(PayDetailDisplay);