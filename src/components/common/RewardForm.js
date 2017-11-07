import React from 'react';
import {Dialog, TextField, FlatButton} from 'material-ui';
import DatePicker from 'material-ui/DatePicker';

const DateTimeFormat = global.Intl.DateTimeFormat;



const RewardForm = ({handleAddClose, addReward, open, onChange, onChangeDate, title, quantity, description, amount, date, errors}) => {

    const actions = [
        <FlatButton
            label="Guardar"
            primary={true}
            keyboardFocused={false}
            onTouchTap={addReward}
        />,
        <FlatButton
            label="Cancel"
            secondary={true}
            keyboardFocused={true}
            onTouchTap={handleAddClose}
        />,
    ];

    console.log(date);

    return(
        <Dialog
            actions={actions}
            title={document.documentElement.clientWidth > 600 ? "Agregar nueva Recompensa" : "Agregar Recompensa"}
            style={{overflow:'scroll'}}
            modal={false}
            open={open}
            autoScrollBodyContent={true}
            onRequestClose={handleAddClose}>

            <TextField
                name="title"
                value={title}
                onChange={onChange}
                hintText="Mi espectacular titulo"
                floatingLabelText="Titulo de la recompensa"
                errorText={errors.title}
            />
            <br/>
            <TextField
                value={description}
                onChange={onChange}
                name="description"
                hintText="La descripción de lo que trata la recompensa"
                multiLine={true}
                rows={2}
                rowsMax={4}
                floatingLabelText="Descripción de la recompensa"
                errorText={errors.description}
            />
            <br />
            <TextField
                value={amount}
                type="number"
                maxLength="7"
                onChange={onChange}
                name="amount"
                hintText="1000"
                floatingLabelText="Monto para adquirir la recompensa"
                errorText={errors.amount}
            /><br />

            <TextField
                value={quantity}
                type="number"
                maxLength="7"
                onChange={onChange}
                name="quantity"
                hintText="10"
                floatingLabelText="Cantidad de disponibles"
                errorText={errors.quantity}
            /><br />

            <DatePicker
                value={new Date(date)}
                name="date"
                hintText="Fecha aproximada de entrega"
                onChange={onChangeDate}
                locale="es"
                DateTimeFormat={DateTimeFormat}
            />

        </Dialog>
    );
};

export default RewardForm;