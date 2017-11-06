import React from 'react';
import {DestacadosDisplay} from './DestacadosDisplay';
import {connect} from 'react-redux';

function mapStateToProps(state, ownProps){

    return {
        destacados:state.projects.filter(d=>d.destacado===true),
        fetched:state.projects.length !== 0
    };
}

export const DestacadosContainer = connect(mapStateToProps)(DestacadosDisplay);