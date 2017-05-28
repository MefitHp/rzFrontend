import React, { Component } from 'react';
import RewardCard from '../common/RewardCard';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';






class Rewards extends Component {
    state = {
        rewards: [
            {id:1},
            {id:2},
            {id:3},
            {id:4},
            {id:5},
            {id:6}
        ],
        open: false
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    addReward = () => {
      alert('orale putin')
    };

    render(){

        const actions = [
            <FlatButton
                label="Guardar"
                primary={true}
                keyboardFocused={false}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Cancel"
                secondary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
            />,
        ];

        // const { project } = this.props;
        return(
            <div>
                {this.state.rewards.map(r=><RewardCard key={r.id} />)}
                <FloatingActionButton
                    onTouchTap={this.handleOpen}
                    style={style}>
                    <ContentAdd />
                </FloatingActionButton>


                <Dialog
                    title="Agregar nueva recompensa"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    Open a Date Picker dialog from within a dialog.
                    <DatePicker hintText="Fecha de entrega aproximada" />
                    <TextField
                        hintText="Mucho amor"
                        floatingLabelText="Nombre de la recompensa"
                    /><br />
                    <TextField
                        hintText="Pura pasión"
                        multiLine={true}
                        rows={2}
                        rowsMax={4}
                        floatingLabelText="Descripción de la recompensa"
                    /><br />
                    <TextField
                        hintText="10"
                        floatingLabelText="Cantidad de recompensas"
                    />
                </Dialog>


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