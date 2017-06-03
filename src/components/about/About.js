import React from 'react';
import './About.css';

class About extends React.Component {

    render() {
        return (
        	<div className='detras'>
        		<h3 className='tittle'> Que es CrowdZapopan?</h3>
        		<div className='info'>
	        		<div className='inf'>
	        			<p>
	        				Somos un programa impulsado por el Gobierno Municipal de Zapopan, que a través de una competencia de ideas, buscamos impulsar, de manera gratuita, a los emprendedores a través de un programa integral de consultoría, mentoría, financiamiento, vinculación e internacionalización. Buscamos emprendedores que destaquen por sus ideas,
							empresas e iniciativas valiosas, relevantes y con valor agregado.
							Somos un programa impulsado por el Gobierno Municipal de Zapopan, que a través de una competencia de ideas, buscamos impulsar, de manera gratuita, a los emprendedores a través de un programa integral de consultoría, mentoría, financiamiento, vinculación e internacionalización. Buscamos emprendedores que destaquen por sus ideas,
							empresas e iniciativas valiosas, relevantes y con valor agregado.
	        			</p>
	        		</div>
	        		<div className='logo'>
	        			<img className='log' src='http://www.retozapopan.com/wp-content/uploads/2016/01/logo_reto_main_final.png' alt='logo'/>
	        		</div>
        		</div>
        	</div>
        );
    }
}

export default About;