import React from 'react';
import './Destacados.css';
import Card from '../../card/Card';

class Destacados extends React.Component {

    render() {
        return (
        	<div className='atras'>
        		<h3 className='tittle'> Proyectos Destacados </h3>
        		<Card />
        		<Card />
        		<Card />
        		<Card />
        	</div>
        );
    }
}

export default Destacados;