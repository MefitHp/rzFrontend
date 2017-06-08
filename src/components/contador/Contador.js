import React from 'react';
import './Contador.css';

class Contador extends React.Component {
	render (){
		return (
			<div className='count'>
				<div className='count_data'>
					<p className='number'>+2000</p>
					<p className='list'>Proyectos</p>
				</div>
				<div className='count_data'>
					<p className='number'>+2000</p>
					<p className='list'>Usuarios</p>
				</div>
				<div className='count_data'>
					<p className='number'>+2000</p>
					<p className='list'>Recaudado</p>
				</div>
				
			</div>
		)
	}
}

export default Contador;
