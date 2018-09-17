import React from 'react';
import './Contador.css';
import $ from 'jquery';

class Contador extends React.Component {

	componentDidMount(){	
		$('.number').each(function(){
			$(this).prop('Counter', 0).animate({
				Counter: $(this).text()
			},{
				duration:4000,
				easing: 'swing',
				step: function(now){
					$(this).text(Math.ceil(now));
				}
			});
		});
	}
	render (){
		return (
			<div className='ache'>
			<hr />
				<div className='count '>
					<div className='count_data'>
						<p className='signo' >+<span className='number'>100</span></p>
						<p className='list'>Proyectos incubados</p>
					</div>
					<div className='count_data'>
						<p className='signo' >+<span className='number'>150</span></p>
						<p className='list'>Millones fondeados</p>
					</div>
					<div className='count_data'>
						<p className='signo' >+<span className='number'>500</span></p>
						<p className='list'>Emprendedores</p>
					</div>
					
				</div>
			</div>
		)
	}
}

export default Contador;
