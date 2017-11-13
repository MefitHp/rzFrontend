import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {BlissDetailPageDisplay} from './BlissDetailPageDisplay';
//import {DemoDisplay} from "./DemoDisplay";
import {projectSelector} from '../../../redux/reducers/projectsReducer';
import MainLoader from '../../common/MainLoader';
import Compartir from '../../publicProfile/share';


class BlissDetailPage extends Component {

    state = {
        displayVideo:false,
        openShare:false
    };

    showVideo = () => {
        this.setState({displayVideo:!this.state.displayVideo});
    };

    onShare = () => {
      this.setState({openShare:!this.state.openShare});
    };

    changeRoute = (name) => {
        this.props.history.push(`/explorar/${name}`)
    };

    render() {
        const {displayVideo} = this.state;
        if(!this.props.fetched) return <MainLoader/>
        return (
            <div>
                <BlissDetailPageDisplay
                    changeRoute={this.changeRoute}
                    cat={this.props.cat}
                    onShare={this.onShare}
                    displayVideo={displayVideo}
                    showVideo={this.showVideo}
                    {...this.props.project}
                />
                <Compartir
                    onShare={this.onShare}
                    open={this.state.openShare}
                    pname={this.props.project.name}
                    pid={this.props.project.id}
                />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    let projectId = ownProps.match.params.projectId;
    const project = projectSelector(state, projectId);
    console.log(projectId, project, state.projects.length>0);
    //testing categories
    const categoryId = project.category[0];
    const cat = state.category.list.find(c=>c.id == categoryId); //falla con ===
    console.log(cat);
    return {
        cat,
        project,
        fetched:state.projects.length > 0
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(dispatch)
    };
}

export default BlissDetailPage = connect(mapStateToProps, mapDispatchToProps)(BlissDetailPage);