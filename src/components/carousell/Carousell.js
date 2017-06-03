import React from 'react';
import './Carousell.css';
import {Carousel} from 'react-responsive-carousel';

class Carousell extends React.Component {

    render() {
        return (
        	<Carousel showArrows={true}  dynamicHeight emulateTouch>
        		<div className='slide'>
        		  <img src='http://staticdn.lovities.com/img/post/898232994/mi-paisaje-ideal-24535.jpg'/>
        		  <p className='legend'>Ulala </p> 
        		</div>
        		<div className='slide'>
            		<img src='https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/12227223_877633965665326_4250458589751884486_n.jpg?oh=4781c9eb8f3bf1e12f1252656f20f729&oe=59B217B1'/>
            		<p className='legend'>chilaquil </p> 
        		</div>
        		<div className='slide'>
            		<img src='https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/12227223_877633965665326_4250458589751884486_n.jpg?oh=4781c9eb8f3bf1e12f1252656f20f729&oe=59B217B1'/>
            		<p className='legend'>lucho </p> 
        		</div>
        	</Carousel>
        );
    }
}

export default Carousell;