import React, { Component } from 'react';
import RewardCard from '../common/RewardCard';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';
import {cyan500} from 'material-ui/styles/colors';
import MainLoader from '../common/MainLoader';
import RewardForm from '../common/RewardForm';
import toastr from 'toastr';
import api from '../../Api/Django';
import _ from 'lodash';
import moment from 'moment'





class Rewards extends Component {
    state = {
        rewards: [],
        open: false,
        editOpen: false,
        addOpen: false,
        new:{}
    };

    componentWillReceiveProps(nextProps){
        this.setState({rewards:nextProps.project.rewards});
    }

    componentWillMount(){
        console.log('el project: ',this.props.project);
        console.log("tipo", this.props.project.rewards);
        if(!this.props.loading && this.props.project.rewards !== undefined){
            this.setState({
                rewards: this.props.project.rewards
            });
        }

    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    updateRewards = (rewardId) => {
        // window.location.reload();
        // let newRewards = this.props.project.rewards.filter(r=>{
        //     if(r.id !== rewardId ) return r;
        // });
        // this.setState({rewards:newRewards});
        // setTimeout(()=>{
        //     api.getProject(this.props.project.id)
        //         .then(
        //             p=>{
        //                 console.log(p);
        //                 this.setState({rewards:p.rewards});
        //             }
        //         );
        // },100);
        setTimeout(()=>{
            this.props.updateProject();
            },100);



    };

    handleAddOpen = () => {
        this.setState({addOpen: true});
    };

    handleAddClose = () => {
        this.setState({addOpen: false});
    };


    onChange = (e) => {
        let reward = this.state.new;
        let field = e.target.name;
        reward[field] = e.target.value;
        this.setState({
            new:reward
        });
    };

    onChangeDate = (event, date) => {
      // console.log(date);
        let reward = this.state.new;
        const fdate = moment(date).format('YYYY-MM-DD'); // 2017-02-06 11:39
        reward.date = fdate;
        this.setState({
            new:reward
        });
    };



    addReward = () => {
        if(_.isEmpty(this.state.new) || this.state.new.title === 'undefined' || this.state.new.amount === 'undefined' || this.state.new.description === 'undefined'){
            return toastr.error('No puedes agregar una recompensa vacia');
        }
        let nuevo = this.state.new;
        nuevo.project = this.props.project.id;
        api.postNewReward(nuevo)
            .then(
                r=>{
                    let rewards = this.state.rewards;
                    rewards.push(r);
                    this.setState({
                        rewards,
                        addOpen:false,
                        new:{}
                    });
                    console.log('r', this.state.rewards)
                    toastr.success('Recompensa agregada! =D');
                },


            )
            .catch(
                e=>{
                    toastr.error('Algo Falló');
                }
            );




    };

    render(){

        return(
            <div>
                <Toolbar
                    style={{backgroundColor:cyan500, marginBottom:20}}>
                    <ToolbarTitle
                        style={{color:'white'}}
                        text="Recompensas" />
                </Toolbar>
                {this.state.rewards.map(r=><RewardCard
                    handleEditOpen={this.handleEditOpen}
                    updateRewards={this.updateRewards}
                    reward={r}
                    key={r.id}
                    history={this.props.history}
                />)}
                <FloatingActionButton
                    onTouchTap={this.handleAddOpen}
                    style={style}>
                    <ContentAdd />
                </FloatingActionButton>


                <RewardForm
                    open={this.state.addOpen}
                    handleAddOpen={this.handleAddOpen}
                    onChange={this.onChange}
                    handleAddClose={this.handleAddClose}
                    addReward={this.addReward}
                    onChangeDate={this.onChangeDate}
                />









                {this.props.loading   && <MainLoader/>}

            </div>
        );
    }
}

const style = {
    position:'fixed',
    bottom:40,
    right:30,
    zIndex:999
};

export default Rewards;