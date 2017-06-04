import React from 'react';
import {Dialog, TextField, FlatButton} from 'material-ui';




const RewardForm = (props) => {

    const actions = [
        <FlatButton
            label="Guardar"
            primary={true}
            keyboardFocused={false}
            onTouchTap={props.addReward}
        />,
        <FlatButton
            label="Cancel"
            secondary={true}
            keyboardFocused={true}
            onTouchTap={props.handleAddClose}
        />,
    ];

    return(
        <Dialog
            actions={actions}
            title={document.documentElement.clientWidth > 600 ? "Agregar nueva Recompensa" : "Agregar Recompensa"}
            style={{overflow:'scroll'}}
            modal={false}
            open={props.open}
            autoScrollBodyContent={true}
            onRequestClose={props.handleAddClose}>

            <TextField
                name="title"
                onChange={props.onChange}
                hintText="Mi espectacular titulo"
                floatingLabelText="Titulo de la recompensa"
            />
            <br/>
            <TextField
                onChange={props.onChange}
                name="description"
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
                onChange={props.onChange}
                name="amount"
                hintText="1000"
                floatingLabelText="Monto para adquirir la recompensa"
            /><br />

        </Dialog>
    );
};

export default RewardForm;