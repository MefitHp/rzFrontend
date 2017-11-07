import React, { Component } from 'react';
import { Paper,
    RaisedButton,
    CardActions,
    Dialog,
    //TextField,
    FlatButton
} from 'material-ui';
//import api from '../../Api/Django';
import toastr from 'toastr';
import RewardForm from './RewardForm';
import moment from 'moment';

//redux
import {updateReward, removeReward} from "../../redux/actions/rewardsActions";
import {connect} from 'react-redux';

class RewardCard extends Component {

    state = {
        editOpen: false,
        reward: this.props.reward,
        loading:false,
        openDelete: false,
        errors:{}
    };

    handleEditOpen = () => {
        this.setState({
            editOpen:!this.state.editOpen,
        });

    };

    handleOpenDelete = () => {
        this.setState({openDelete: true});
    };

    handleCloseDelete = () => {
        this.setState({openDelete: false});
    };

    saveReward = () => {
        this.setState({
            loading: true,
            editOpen: false
        });
        // api.updateReward(this.state.reward.id, this.state.reward)
       // api.putAxiosReward(this.state.reward.id, this.state.reward)
        this.props.updateReward(this.state.reward)
            .then(
                r=>{
                    if(r)
                    toastr.success("Tu Recompensa se guardó con éxito =D");
                    console.log('then: ',r);
                    // this.setState({
                    //     reward:r
                    // });
                }
            )
            .catch(
                e=>{
                    toastr.error("No se pudo guardar D=");
                    if(e['amount']){
                        toastr.error(e.amount[0]);
                    }
                    if(e['title']){
                        toastr.error(e.title[0]);
                    }
                    if(e['description']){
                        toastr.error(e.description[0]);
                    }
                    // toastr.error(e[]);
                    // console.log('error destelado: ',r);
                }
        );
    };

    deleteReward = () => {
        const reward = this.state.reward;
        //api.deleteReward(rewardId);
        this.props.removeReward(reward)
            .then(()=>toastr.success('Recompensa Eliminada'))
            .catch(()=>toastr.error("No se pudo borrar"));

       // this.props.updateRewards(rewardId);
        this.setState({
            openDelete:false
        });

    };


    onChange = (e) => {
      let reward = this.props.reward;
      let field = e.target.name;
      reward[field] = e.target.value;
      this.setState({
        reward
      });
    };

    onChangeDate = (e,date) => {
        let formated = moment(date).format('YYYY-MM-DD');
        let reward = Object.assign({}, this.state.reward);
        console.log(date);
        console.log(formated);

    };

    render(){
        const {reward, editOpen, errors} = this.state;
        const editActions = [
            <FlatButton
                label="Guardar"
                primary={true}
                keyboardFocused={false}
                onTouchTap={this.saveReward}
            />,
            <FlatButton
                label="Cancel"
                secondary={true}
                keyboardFocused={true}
                onTouchTap={this.handleEditOpen}
            />,
        ];

        const deleteActions = [
            <FlatButton
                label="BORRAR"
                secondary={true}
                keyboardFocused={false}
                onTouchTap={this.deleteReward}
            />,
            <FlatButton
                label="Cancelar"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleCloseDelete}
            />,
        ];

        return(

            <Paper
                className="la-reward"
                style={{display:'flex', alignItems:'center'}}>

                <div style={{flex:3}}>
                    <h4>
                        {this.props.id +1} - {reward.title}
                    </h4>
                    <p>
                        {reward.description}
                    </p>
                    <h3>
                        $ {reward.amount}
                    </h3>
                    <CardActions>
                        <RaisedButton
                            onTouchTap={this.handleEditOpen}
                            buttonStyle={{flex:1, color:'#2196F3'}}>
                            Editar
                        </RaisedButton>
                        <RaisedButton
                            onTouchTap={this.handleOpenDelete}
                            secondary={true}
                            buttonStyle={{flex:1, color:'white', backgroundColor:"#87316c"}}
                        >
                            Eliminar
                        </RaisedButton>
                    </CardActions>
                </div>



                <RewardForm
                    {...reward}
                    errors={errors}
                    open={editOpen}
                    handleAddClose={this.handleEditOpen}
                    addReward={this.saveReward}
                    onChangeDate={this.onChangeDate}
                    onChange={this.onChange}
                />



                <Dialog
                    actions={deleteActions}
                    modal={false}
                    open={this.state.openDelete}
                    onRequestClose={this.handleCloseDelete}
                >
                    Segur@ que deceas borrar la recompensa {reward.title} ?
                </Dialog>

            </Paper>
        );
    }
}

function mapStateToProps(){
    return {}
}

export default RewardCard = connect(mapStateToProps, {updateReward, removeReward})(RewardCard);