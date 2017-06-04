import React from 'react';
import './Footer.css';
import FontIcon from 'material-ui/FontIcon';


class Footer extends React.Component {

    render() {
        return (
        <div className='footer'>
       		<div className='footer_info'>
       			<div className='definition'>
       				<h4> Reto Zapopan</h4>
       				<p> Somos un programa impulsado por el Gobierno Municipal de Zapopan,
       				 que a través de una competencia de ideas, buscamos impulsar, 
       				 de manera gratuita, a los emprendedores a través de un programa integral 
       				 de consultoría, mentoría, financiamiento, vinculación e internacionalización.
       				  Buscamos emprendedores que destaquen por sus ideas,
					empresas e iniciativas valiosas, relevantes y con valor agregado.</p>

       			</div>
       			<div className='definition'>
       				<h4> Reto Zapopan</h4>
       				<p> Somos un programa impulsado por el Gobierno Municipal de Zapopan,
       				 que a través de una competencia de ideas, buscamos impulsar, 
       				 de manera gratuita, a los emprendedores a través de un programa integral 
       				 de consultoría, mentoría, financiamiento, vinculación e internacionalización.
       				  Buscamos emprendedores que destaquen por sus ideas,
					empresas e iniciativas valiosas, relevantes y con valor agregado.</p>

       			</div>
       			<div className='definition'>
       				<h4> Reto Zapopan</h4>
       				<p> Somos un programa impulsado por el Gobierno Municipal de Zapopan,
       				 que a través de una competencia de ideas, buscamos impulsar, 
       				 de manera gratuita, a los emprendedores a través de un programa integral 
       				 de consultoría, mentoría, financiamiento, vinculación e internacionalización.
       				  Buscamos emprendedores que destaquen por sus ideas,
					empresas e iniciativas valiosas, relevantes y con valor agregado.</p>

       			</div>
       		</div>
    		<hr/>
    		<div className='social'>
    	   	   <FontIcon className='material-icons redes ' style={{color:'white', fontSize:'50'}}><span>videogame_asset</span></FontIcon>
	       		<FontIcon className='material-icons redes' style={{color:'white', fontSize:'50'}}><span>videogame_asset</span></FontIcon>
    	   		<FontIcon className='material-icons redes' style={{color:'white', fontSize:'50'}}><span>videogame_asset</span></FontIcon>
    	   		</div>
        </div>
        );
    }
}

export default Footer;