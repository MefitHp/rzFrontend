import React from 'react';
import './Comentarios.css';
import CardComent from '../common/CardComent';
import fondo from '../../assets/fondo-01.png';


class Comentarios extends React.Component {

    render() {
        return (
          <div className='background atras'>
          	<p className='black uno'>Algunos comentarios...</p>
          	
			     <div className='coments'>
          	<CardComent />
          	<CardComent />
          	<CardComent />
          	</div>
          </div>
        );
    }
}

export default Comentarios;
