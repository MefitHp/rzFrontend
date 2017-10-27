import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {CartDisplay} from './CartDisplay';



function mapStateToProps(state, ownProps) {


    return {
        amount:state.rewards.currentReward.amount,
        rewardId:state.rewards.currentReward.id,
        fetched: Object.keys(state.rewards.currentReward).length !== 0

        //extras del padre
        //logo:ownProps.logo,
        //findLogo:ownProps.findLogo
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(dispatch)
    };
}

export const CartContainer = connect(mapStateToProps, mapDispatchToProps)(CartDisplay);