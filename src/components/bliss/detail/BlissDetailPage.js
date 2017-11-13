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
        openShare:false,
        completed:0
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

    goToCart = (id) => {
        this.props.history.push(`/cart/${id}`)
    };

    progress(completed) {
        if (completed > this.props.project.actual_percent) {
            this.setState({completed:this.props.project.actual_percent});
        } else {
            this.setState({completed});
            const diff = Math.random() * 10;
            this.timer = setTimeout(() => this.progress(completed + diff), 1000);
        }
    }

    componentDidMount() {
        this.timer = setTimeout(() => this.progress(5), 1000);
        // console.log('mi prop:',this.props.project);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        const porcent = Math.round(this.props.project.actual_percent);
        const {displayVideo, completed} = this.state;
        if(!this.props.fetched) return <MainLoader/>
        return (
            <div>
                <BlissDetailPageDisplay
                    goToCart={this.goToCart}
                    porcent={porcent}
                    completed={completed}
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
    //console.log(projectId, project, state.projects.length>0);
    //testing categories
    const categoryId = project.category[0];
    const cat = state.category.list.find(c=>c.id == categoryId); //falla con ===
    //console.log(cat);
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