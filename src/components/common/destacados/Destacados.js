import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './Destacados.css';
import Card from '../card/Card';

class Destacados extends React.Component {

    render() {
        return (
        	<div className='detras'>
        		<h3> Proyectos Destacados </h3>
        		<Card />
        	</div>



        );
    }
}

export default Destacados;