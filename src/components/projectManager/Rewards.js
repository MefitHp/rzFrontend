import React, { Component } from 'react';
import RewardCard from '../common/RewardCard';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';
//import {cyan500} from 'material-ui/styles/colors';
import MainLoader from '../common/MainLoader';
import RewardForm from '../common/RewardForm';
import toastr from 'toastr';
//import api from '../../Api/Django';
import _ from 'lodash';
import moment from 'moment'

//2018 api
import {saveReward} from '../../Api/nodejs';





class Rewards extends Component {
    state = {
        rewards: this.props.rewards,
        open: false,
        editOpen: false,
        addOpen: false,
        new:{
            title:'',
            body:'',
            amount:'',
            date:moment(new Date()).format("YYYY-MM-DD"),
            quantity:0
        },
        errors:{}
    };

    // componentWillReceiveProps(nextProps){
    //     this.setState({rewards:nextProps.rewards});
    // }

    componentWillMount(){
        console.log(this.props.rewards)
      //  console.log('el project: ',this.props.project);
      //  console.log("tipo", this.props.project.rewards);
        if(!this.props.loading && this.props.project.rewards !== undefined){
            this.setState({
                rewards: this.props.rewards
            });
        }

    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };


    handleAddOpen = () => {
        this.setState({addOpen: true});
    };

    handleAddClose = () => {
        this.setState({addOpen: false});
    };


    onChange = (e) => {
        let errors= {};
        let reward = this.state.new;
        let field = e.target.name;
        let value = e.target.value;
        reward[field] = value;
        if(field === "description" && value.length < 8) errors.description = "Agrega una descripción mas larga";
        this.setState({
            new:reward,
            errors
        });
    };

    onChangeDate = (event, date) => {
      // console.log(date);
        let reward = this.state.new;
        //const fdate = moment(date).format('YYYY-MM-DD'); // 2017-02-06 11:39
        //reward.date = fdate;
        reward.date = date;
        this.setState({
            new:reward
        });
    };


    validateForm = () => {
        let formIsValid = true;
        let errors = {};
        let nuevo = this.state.new;
        if(_.isEmpty(nuevo)) {
            toastr.error('No puedes agregar una recompensa vacia');
            formIsValid = false;

        }
        if( nuevo.title.length < 5 ) {
            errors.title = "El título es muy corto";
            formIsValid = false;
        }
        if( nuevo.amount < 50 ) {
            errors.amount = "El monto mínimo es de 50";
            formIsValid = false;
        }
        if( nuevo.body.length < 8 ) {
            errors.description = "La descripción es muy corta";
            formIsValid = false;
        }
        if( nuevo.quantity < 1 ) {
            errors.quantity = "Escribe una cantidad correcta";
            formIsValid = false;
        }
        this.setState({errors});
        return formIsValid;
    };


    addReward = () => {
        if(!this.validateForm()){
            return toastr.error("Corrige el formulario porfavor")
        }
        else{
            let nuevo = Object.assign({},this.state.new);
            const {rewards} = this.state;
            nuevo.project = this.props.project._id;
            nuevo.date = moment(nuevo.date).format('YYYY-MM-DD');
            //this.props.addReward(nuevo)
            saveReward(nuevo)
                .then(r=>{
                    toastr.success('Recompensa agregada! =D');
                    rewards.push(r);
                    this.setState({addOpen:false, rewards});
                })
                .catch(e=>toastr.error('Algo Falló'));

        } //else



    };

    render(){

        return(
            <div>

                <Toolbar
                    style={{backgroundColor:"grey", marginBottom:20}}>
                    <ToolbarTitle
                        style={{color:'white'}}
                        text="Recompensas" />
                </Toolbar>
                {this.props.rewards.map((r, index)=><RewardCard
                    handleEditOpen={this.handleEditOpen}
                    rewardRemoved={this.props.rewardRemoved}
                    reward={r}
                    key={index}
                    id={index}
                    history={this.props.history}
                    validated={this.props.validated}
                    project = {this.props.project}

                />)}
                <FloatingActionButton
                    backgroundColor="#87316C"
                    onTouchTap={this.handleAddOpen}
                    style={style}>
                    <ContentAdd />
                </FloatingActionButton>


                <RewardForm
                    {...this.state.new}
                    open={this.state.addOpen}
                    handleAddOpen={this.handleAddOpen}
                    onChange={this.onChange}
                    handleAddClose={this.handleAddClose}
                    addReward={this.addReward}
                    onChangeDate={this.onChangeDate}
                    errors={this.state.errors}
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