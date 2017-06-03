import React from 'react';
import './Card.css';
import Avatar from '../common/Avatar';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';


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
        			<BottomNavigation >
          <BottomNavigationItem
            label="Seguidores"
            icon={nearbyIcon}
            onTouchTap={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Donadores"
            icon={nearbyIcon}
            onTouchTap={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Recaudado"
            icon={nearbyIcon}
            onTouchTap={() => this.select(2)}
          />
        </BottomNavigation>
        		</div>
        	</Paper>
        </div>
        );
    }
}

export default Card;