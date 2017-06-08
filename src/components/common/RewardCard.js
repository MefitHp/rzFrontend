import React, { Component } from 'react';
import { Paper,
    RaisedButton,
    CardActions,
    Dialog,
    TextField,
    FlatButton
} from 'material-ui';
import api from '../../Api/Django';
import toastr from 'toastr';



class RewardCard extends Component {

    state = {
        editOpen: false,
        reward: this.props.reward,
        loading:false,
        openDelete: false
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
        api.putAxiosReward(this.state.reward.id, this.state.reward)
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
        const rewardId = this.state.reward.id;
        api.deleteReward(rewardId);
        toastr.success('Recompensa Eliminada');
        this.props.updateRewards(rewardId);
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

    render(){
        const {reward} = this.state;
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
                        {reward.id} - {reward.title}
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
                            buttonStyle={{flex:1, color:'white'}}
                        >
                            Eliminar
                        </RaisedButton>
                    </CardActions>
                </div>



                <Dialog
                    actions={editActions}
                    title={document.documentElement.clientWidth > 600 ? "Edición de Recompensa" : "Editar Recompensa"}
                    style={{overflow:'scroll'}}
                    modal={false}
                    open={this.state.editOpen}
                    autoScrollBodyContent={true}
                    onRequestClose={this.handleEditOpen}>

                    <TextField
                        name="title"
                        onChange={this.onChange}
                        value={reward.title}
                        hintText="Mi espectacular titulo"
                        floatingLabelText="Titulo de la recompensa"
                    />
                    <br/>
                    <TextField
                        onChange={this.onChange}
                        name="description"
                        value={reward.description}
                        hintText="La descripción de lo que trata la recompensa"
                        multiLine={true}
                        rows={2}
                        rowsMax={4}
                        floatingLabelText="Descripción de la recompensa"
                    />
                    <br />
                    <TextField
                        type="digit"
                        maxLength="7"
                        onChange={this.onChange}
                        name="amount"
                        value={reward.amount}
                        hintText="1000"
                        floatingLabelText="Monto para adquirir la recompensa"
                    /><br />

                </Dialog>



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

export default RewardCard;