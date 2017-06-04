import React from 'react';
import './Card.css';
import Avatar from '../common/Avatar';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import FontIcon from 'material-ui/FontIcon';

const nearbyIcon = <IconLocationOn />;

class Card extends React.Component {


    render() {
        return (
        <div className='container'>

        	<Paper className='card'>
        		<div className='image'></div>
        		<div className='foto'>
        			<Avatar />
        		</div>
        		<div className='datos'>
        		<p className='project' 
        			style={{margin:0}}
        		>Brenda Ortega</p>
        		<p className='name'
        			style={{margin:0}}
        		>Hola mundo con rea</p>
        		</div>
        		<div className='description'>
        			<p>Este proyecto esta bien bonis..</p>
        		</div>
        		<div className='iconos'>
        		
                    <div className='inf_project'>
                        <div className='data_project'>
                            <FontIcon className='material-icons icon_dest' style={{color:'#61656a'}}
                                    >group</FontIcon>
                                <p>Seguidores</p>
                        </div>
                        <div  className='data_project'>
                            <FontIcon className='material-icons icon_dest' style={{color:'#61656a'}}
                                    >thumb_up</FontIcon>
                                     <p>Donadores</p>
                        </div>
                        <div  className='data_project'>
                            <FontIcon className='material-icons icon_dest' style={{color:'#61656a'}}
                                    >trending_up</FontIcon>
                                     <p>Recaudado</p>
                        </div>
                    </div>
                </div>
        	</Paper>
        </div>
        );
    }
}

export default Card;