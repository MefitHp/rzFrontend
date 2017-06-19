import React from 'react';
import './Process.css';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import '../../../node_modules/react-joyride/lib/react-joyride-compiled.css';


class Process extends React.Component {

    componentDidMount(){

    }

    render() {

        return (
        	<div className='detras'>



                />
        		<h3 className='tittle'> Como fondear?</h3>
        		<div className='box_process'>
                    <img  className='img_process' src='https://static.pexels.com/photos/28216/pexels-photo.jpg' alt='Proces'/>
                    <RaisedButton
                        id="tutorial"
                        className='btn_tuto'
                        label="Ver Tutorial"
                        primary={true}

                    />

                </div>
                <div className='space'>
                <div className='contenedor'>
                    <div className='content'>
                        <div className='circle_process'>
                            <FontIcon className='material-icons icon_p' style={{fontSize:70,color:'#00BCD4'}}
                            >person_add</FontIcon>
                        </div> 
                        <div className='paso'>
                            <h3>Crea un perfil de usuario</h3>
                            <p>
                                Inicia sesión vía redes sociales para crear tu perfil.
                            </p>
                        </div>
                    </div> 
                    <div className='content'> 
                         <div className='circle_process'>
                            <FontIcon className='material-icons icon_p' style={{fontSize:70,color:'#00BCD4'}}
                            >touch_app</FontIcon>
                        </div> 
                         <div className='paso'>
                            <h3>Elige un proyecto</h3>
                            <p>
                                Elige un proyecto, checa su descripción y ponte en cotacto con el emprendedor.
                            </p>
                        </div>
                    </div> 
                     <div className='content'>               
                         <div className='circle_process'>
                            <FontIcon className='material-icons icon_p' style={{fontSize:70,color:'#00BCD4'}}
                            >redeem</FontIcon>
                        </div> 
                        <div className='paso'>
                            <h3>Escoge una recompensa</h3>
                            <p>
                               Elige una de las recompensas que el emprendedor ofrece por tu apoyo.
                            </p>
                        </div>
                    </div>
                     <div className='content'>   
                         <div className='circle_process'>
                            <FontIcon className='material-icons icon_p' style={{fontSize:70,color:'#00BCD4'}}
                            >payment</FontIcon>
                        </div> 
                        <div className='paso'>
                            <h3>Fondea</h3>
                            <p>
                                Completa tus datos de fondeo para apoyar el proyecto.
                            </p>
                        </div>
                    </div>
                     <div className='content'>   
                         <div className='circle_process'>
                            <FontIcon className='material-icons icon_p' style={{fontSize:70,color:'#00BCD4'}}
                            >chat</FontIcon>
                        </div>
                        <div className='paso'>
                            <h3 id="block">Mantente actualizado</h3>
                            <p>
                                En tu perfil podrás ver los avances del proyecto y chatear con el emprendedor.
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