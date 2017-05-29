import React, { Component } from 'react';
import { Paper, RaisedButton } from 'material-ui';


class RewardCard extends Component {
    render(){
        return(
            <Paper
                className="la-reward"
                style={{display:'flex', alignItems:'center'}}>

                <div style={{flex:3}}>
                    <h4>
                        Una cuenta por dirección de correo electrónico
                    </h4>
                    <p>
                        Para proteger tu proyecto de cualquier uso inadecuado, limitamos el número de registros (tanto los anónimos como los que utilizan correo electrónico y contraseña) que pueden realizarse en tu aplicación desde una misma dirección IP. En esta sección puedes solicitar y programar cambios temporales para esta cuota.
                    </p>
                </div>
                <RaisedButton buttonStyle={{flex:1, color:'#2196F3'}}>
                    Cambiar
                </RaisedButton>

            </Paper>
        );
    }
}

export default RewardCard;