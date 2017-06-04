import React from 'react';
import './Comentarios.css';
import CardComent from '../common/CardComent';


class Comentarios extends React.Component {

    render() {
        return (
          <div>
          	<h3 className='tittle'>Algunos comentarios...</h3>
          	
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
