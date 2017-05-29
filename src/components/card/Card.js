import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './Card.css';
import Avatar from '../common/Avatar';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';


const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
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
        		<h5 
        			style={{margin:0}}
        		>Brenda Ortega</h5>
        		<h6
        			style={{margin:0}}
        		>Hola mundo con rea</h6>
        		</div>
        		<div>
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