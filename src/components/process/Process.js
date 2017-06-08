import React from 'react';
import './Process.css';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';


class Process extends React.Component {

    render() {
        return (
        	<div className='detras'>
        		<h3 className='tittle'> Como fondear?</h3>
        		<div className='box_process'>
                    <img  className='img_process' src='https://static.pexels.com/photos/28216/pexels-photo.jpg' alt='Proces'/>
                    <RaisedButton className='btn_tuto' label="Ver Tutorial" primary={true}  />

                </div>
                <div className='space'>
                <div className='contenedor'>
                    <div className='content'>
                        <div className='circle_process'>
                            <FontIcon className='material-icons icon_p' style={{fontSize:70,color:'#00BCD4'}}
                            >person_add</FontIcon>
                        </div> 
                        <div className='paso'>
                            <h3>Inicia sesión</h3>
                            <p>
                                Crea un perfil de usuario con redes sociales.
                            </p>
                        </div>
                    </div> 
                    <div className='content'> 
                         <div className='circle_process'>
                            <FontIcon className='material-icons icon_p' style={{fontSize:70,color:'#00BCD4'}}
                            >touch_app</FontIcon>
                        </div> 
                         <div className='paso'>
                            <h3>Inicia sesión</h3>
                            <p>
                                Crea un perfil de usuario con redes sociales.
                            </p>
                        </div>
                    </div> 
                     <div className='content'>               
                         <div className='circle_process'>
                            <FontIcon className='material-icons icon_p' style={{fontSize:70,color:'#00BCD4'}}
                            >redeem</FontIcon>
                        </div> 
                        <div className='paso'>
                            <h3>Inicia sesión</h3>
                            <p>
                                Crea un perfil de usuario con redes sociales.
                            </p>
                        </div>
                    </div>
                     <div className='content'>   
                         <div className='circle_process'>
                            <FontIcon className='material-icons icon_p' style={{fontSize:70,color:'#00BCD4'}}
                            >payment</FontIcon>
                        </div> 
                        <div className='paso'>
                            <h3>Inicia sesión</h3>
                            <p>
                                Crea un perfil de usuario con redes sociales.
                            </p>
                        </div>
                    </div>
                     <div className='content'>   
                         <div className='circle_process'>
                            <FontIcon className='material-icons icon_p' style={{fontSize:70,color:'#00BCD4'}}
                            >chat</FontIcon>
                        </div>
                        <div className='paso'>
                            <h3>Inicia sesión</h3>
                            <p>
                                Crea un perfil de usuario con redes sociales.
                            </p>
                        </div>
                    </div>   
                    </div>
                </div>
                
        	</div>
        );
    }
}

export default Process;