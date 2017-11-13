import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {BlissDetailPageDisplay} from './BlissDetailPageDisplay';
//import {DemoDisplay} from "./DemoDisplay";

class BlissDetailPage extends Component {

    state = {
        displayVideo:false
    };

    showVideo = () => {
        this.setState({displayVideo:!this.state.displayVideo});
    };

    render() {
        const {displayVideo} = this.state;
        return (
            <div>
                <BlissDetailPageDisplay
                    displayVideo={displayVideo}
                    showVideo={this.showVideo}
                />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(dispatch)
    };
}

export default BlissDetailPage = connect(mapStateToProps, mapDispatchToProps)(BlissDetailPage);